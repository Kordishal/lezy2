// onerror = null

var anz = 24					// so viele floeckchen
var flakes = 2					// so viele bildchen
var speed = 8
var movement = new Array()

var dom = (document.getElementById)
var ie = (document.all)
var opera = (navigator.userAgent.indexOf("Opera")>-1)

// Schneeflocken ins Dokument schreiben
// und an zufällige Positionen setzen
if(ie || dom || opera)
	{
	for(i=0;i<anz;i++) {flake(i)}
	setInterval("snowing()", 128)
	}

// hier fällt der schnee
function snowing()
	{
	if(ie || dom || opera) 
		{
			for(i=0;i<anz;i++)
			{

			// DHTML-Objekt lokalisieren
			var obj
			if(ie)
				{
				eval('obj = document.all.s' + i + '.style')
				}
			else
				{
				eval('obj = document.getElementById("s' + i + '").style')
				}

			var y = parseInt(obj.top)	// aktuelle position (string mit einheit "px")
												// in zahl umwandeln (pixelz)

			y += movement[i]
				
			obj.top = y + "px"
			
			if(ie)
				{
				if(opera)
					{
					if(y> (innerHeight+pageYOffset-16))
						{
						obj.top = "0px"
						obj.left = random(innerWidth-8) + "px"
						movement[i] = (random(speed)+1)
						}
					}
				else
					{
					if (y> (document.body.offsetHeight + document.body.scrollTop-16))
						{
						obj.top = "0px"
						obj.left = (random(document.body.offsetWidth-16)) + "px"
						movement[i] = (random(speed)+1)
						}
					}
				}
			else
				{
				if(y> (innerHeight+pageYOffset-16))
					{
					obj.top = "0px"
					obj.left = random(innerWidth-8) + "px"
					movement[i] = (random(speed)+1)
					}
				}
			}
		}
	}



// eine Schneeflocke zeichnen und auch gleich eine 
// Fall-Geschwindigkeit festlegen
function flake(n)
	{
	document.write
		(
		'<div id="s' + n + '" style="position:absolute;top:-75px;left:' + random(93) + '%;">',
		'<img src="f' + random(flakes) + '.gif">',
		'</div>'
		)
	movement[i] = random(speed)+1
	}

function random(n)
	{
	return Math.round(Math.random()*n)
	}