<?php

use App\CoreUtils;

CoreUtils::loadPage(array(
	'title' => 'Poly',
	'js' => array('jquery.ba-throttle-debounce','poly-editor', $do),
	// TODO add 'jquery.qtip'
	'css' => array('poly-editor', $do),
));
