<?php

namespace Models;

use App\Models\EventEntry;
use App\Models\EventEntryVote;
use PHPUnit\Framework\TestCase;

class EventEntryVoteTest extends TestCase {
	function testIsLockedIn(){
		$entry = new EventEntry([ 'last_edited' => '2017-01-20T10:00:00Z' ]);
		$entryVote = new EventEntryVote([ 'cast_at' => '2017-01-20T12:00:00Z' ]);
		$lockedIn = $entryVote->isLockedIn($entry, strtotime('+59 minutes',strtotime($entryVote->cast_at)));
		self::assertEquals(false, $lockedIn, 'Votes shouldn\'t be locked in after an hour if the entry isn\'t edited');
		$lockedIn = $entryVote->isLockedIn($entry, strtotime('+1 hour', strtotime($entryVote->cast_at)));
		self::assertEquals(true, $lockedIn, 'Votes should be locked in after an hour if the entry isn\'t edited');
		$lockedIn = $entryVote->isLockedIn($entry, strtotime('+1 day', strtotime($entryVote->cast_at)));
		self::assertEquals(true, $lockedIn, 'Votes should be locked in after an hour if the entry isn\'t edited');

		$entry = new EventEntry([ 'last_edited' => '2017-01-20T15:40:00Z' ]);
		// Simulates that vote was cast 20 minutes before the post was edited
		$entryVote = new EventEntryVote([ 'cast_at' => strtotime('-20 minutes', strtotime($entry->last_edited)) ]);
		// Forcibly check if the post is locked in 10 minutes after the edit
		$lockedIn = $entryVote->isLockedIn($entry, strtotime('+10 minutes', strtotime($entry->last_edited)));
		self::assertEquals(false, $lockedIn, 'Votes should be changable if the entry is edited after the vote is cast');
	}
}