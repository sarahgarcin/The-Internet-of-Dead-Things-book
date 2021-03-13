<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>MinitelSE</title>
	<link href="fonts/stylesheet.css" rel="stylesheet" type="text/css">
	<link href="css/interface-0.1.css" rel="stylesheet" type="text/css">
	<link href="css/shared.css" rel="stylesheet" type="text/css">
	<link href="css/print.css" rel="stylesheet" type="text/css">
	<script src="js/paged.polyfill.js"></script>
</head>
<body>

<?php
	include('libs/parsedown.php'); // markdown
	include('libs/parsedownExtra.php'); // for mixed html markdown
	include('libs/parsedownExtraPlugin.php'); // title anchors etc.
	$path    = 'content';
	$files = array_diff(scandir($path), array('.', '..'));

	foreach ($files as $file) {
		$contents = file_get_contents($path . '/' .$file);
	
  // $contents = file_get_contents('content/toolkit.md');

		$parsedown = new ParsedownExtraPlugin();
		$parsedown->headerAttributes = function($Text, $Attributes, &$Element, $Level) {
	    $Id = $Attributes['id'] ?? trim(preg_replace('/[^a-z\d\x{4e00}-\x{9fa5}]+/u', '-', strtolower($Text)), '-');
	    return ['id' => $Id];
		};
		echo '<div class="page p5sketch"></div>';
	  echo $parsedown->text($contents);
	  echo '<div class="doublepage images left">Double page d\'images</div><div class="doublepage images right">Double page d\'images</div>';
  }
?>

<script type="text/javascript" src="js/slugify.js"></script>
<script type="text/javascript" src="js/p5.min.js"></script>
<script type="text/javascript" src="js/main.js"></script>

</body>
</html>
