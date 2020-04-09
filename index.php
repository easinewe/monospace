<!doctype html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Twitter Feed - CSS Font</title>
		<link href="style.css" rel="stylesheet" type="text/css">
		<link href="tweet_style.css" rel="stylesheet" type="text/css">
		<?php include('functions.php'); ?>
	</head>
	<body>

		<!--Pull in and display tweets from specific usernames with css font-->

		<?php
			$screen_name = 'realDonaldTrump';
			$tweets = returnTweet($screen_name);
			//var_dump($tweets);	
		?>	

		<ul id="tweet_list">
			<?php
				foreach($tweets as $tweet){
					$text = $tweet['text'];
					$pub_date = $tweet["created_at"];
					$date = date("m/d/y", strtotime($pub_date));

					echo '<li class="morphing" data-date="'.$date.'">'.$text.'</li>';
				}
			?>
		</ul>

		<div id="grid" class="tweet_grid"></div>

	</body>
</html>

<script src="main_tweet.js"></script>
