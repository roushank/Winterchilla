<?php

# GDPR

require __DIR__.'/../config/init/minimal.php';

use App\CoreUtils;
use App\Models\Log;
use App\Models\FailedAuthAttempt;

// Remove IP addresses from logs older than 3 months

$log_done = Log::update_all(array(
  'set' => ['ip' => GDPR_IP_PLACEHOLDER],
  'conditions' => "now() - created_at > INTERVAL '3 MONTH'",
));

$log_message = CoreUtils::makePlural('log entry', $log_done, PREPEND_NUMBER).' updated';
if (posix_isatty(STDIN))
  echo basename(__FILE__).": $log_message\n";
else CoreUtils::error_log($log_message);

// Delete failed auth attempts older than 3 months

$auth_done = FailedAuthAttempt::delete_all(array(
  'conditions' => "now() - created_at > INTERVAL '3 MONTH'",
));

$auth_message = CoreUtils::makePlural('failed auth attempts', $auth_done, PREPEND_NUMBER).' deleted';
if (posix_isatty(STDIN))
  echo basename(__FILE__).": $auth_message\n";
else CoreUtils::error_log($auth_message);
