<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Chose An Episode</title>
	<link rel="stylesheet" href="cards.css" type="text/css">

<script language="javascript">
<!--

var urls = new Array
	(
	"/form_a/hiphopband.html",
	"/are/invited_to/ny.html",
	"/go/swimming.html",
	"/are/moving/",
	"/make_a/homepage.html",
	"/draw_a/familytree.html",
	"/in/moscow.html",
	"/at/zkm.html",
	"/celebrate/christmas.html",
	"/have_a/nightmare.html",
	"/enter_the/art_market.html",
	"/go/to/beauty_salon.html",
	"/in/space/",
	"/in/love/",
	"/get/religious.html",
	"/have/to/escape.html",
	"/visit/bodyworlds.html",
	"/got/a/fan.html",
	"/got/a/spam.html",
	"/are/ill/"
	)

function g(n)
	{
	parent.frames.episode.location.replace(urls[n])
	return true;
	}

function check()
	{
	checked = false

	for(i=0;i<document.forms[0].elements.length;i++)
		{
		if(document.forms[0].elements[i].type == "radio")
			{
			if(document.forms[0].elements[i].checked)
				checked = true
			}
		}

	if(checked)
		{
		return true
		}
	else
		{
		alert("Please choose an episode to send as a FREE greeting card!")
		return false
		}

	}

//-->
</script>


</head>

<body>


	Choose an episode to send as a FREE greeting card:<br>
	<br>

	<table width="100%">
	<form action="message.php" method="post">
		<tr>
	
			<td nowrap valign="top">
				<input type="radio" name="episode" value="0" onClick="return g(0)">
				form a hip hop band<br>

				<input type="radio" name="episode" value="1" onClick="return g(1)">
				are invited to NY<br>

				<input type="radio" name="episode" value="2" onClick="return g(2)">
				go swimming<br>

				<input type="radio" name="episode" value="3" onClick="return g(3)">
				are moving<br>

				<input type="radio" name="episode" value="4" onClick="return g(4)">
				make a homepage</td>

			<td nowrap nowrap valign="top">
				<input type="radio" name="episode" value="5" onClick="return g(5)">
				draw a family tree<br>

				<input type="radio" name="episode" value="6" onClick="return g(6)">
				in Moscow<br>

				<input type="radio" name="episode" value="7" onClick="return g(7)">
				at ZKM<br>

				<input type="radio" name="episode" value="8" onClick="return g(8)">
				celebrate Christmas<br>

				<input type="radio" name="episode" value="9" onClick="return g(9)">
				have a nightmare</td>

			<td nowrap nowrap valign="top">
				<input type="radio" name="episode" value="10" onClick="return g(10)">
				enter the art market<br>

				<input type="radio" name="episode" value="11" onClick="return g(11)">
				go to beauty salon<br>

				<input type="radio" name="episode" value="12" onClick="return g(12)">
				in space<br>

				<input type="radio" name="episode" value="13" onClick="return g(13)">
				in love<br>

				<input type="radio" name="episode" value="14" onClick="return g(14)">
				get religious</td>

			<td nowrap nowrap valign="top">
				<input type="radio" name="episode" value="15" onClick="return g(15)">
				have to escape<br>
				
				<input type="radio" name="episode" value="16" onClick="return g(16)">
				visit bodyworlds<br>

				<input type="radio" name="episode" value="17" onClick="return g(17)">
				got a fan<br>

				<input type="radio" name="episode" value="18" onClick="return g(18)">
				got a spam<br>

				<input type="radio" name="episode" value="19" onClick="return g(19)">
				are ill<br>

			<td align="right" valign="bottom">
								<input type="submit" name="go" value="onwards &raquo;"></td>

		</tr>
	</form>
	</table>

</body>
</html>