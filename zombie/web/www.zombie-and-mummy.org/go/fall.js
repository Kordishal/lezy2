var library = new Array			// das sind die vorhandenen bilder
	("bubbles.gif", "bubbles.gif", "bubbles.gif", "skydiver_falling_md_clr.gif", "ambulance.gif", "stern.gif", "stern2.gif", "mermaid.gif", "fisch024.gif", "superball.gif", "swimmer.gif", "robot.gif", "muschl03.gif", "ti_seepferd.gif", "stern3.gif", "bear.gif", "dino.gif", "carrot.gif", "gold_medal_rocking_md_clr.gif", "erotik.gif", "felix.gif", "office.gif", "hand.gif", "ampel.gif", "kids_on_beach.gif", "cd.gif", "carpet.gif", "girl3.gif", "phone.gif", "dolphin.gif", "molekuel.gif", "fee.gif", "hamster.gif", "girl.gif", "ballon.gif", "coffee.gif", "bier.gif", "duck2.gif", "frog_hop_md_clr.gif", "alien.gif", "catstunt.gif", "diamant.gif", "iron.gif", "buoy_bob_md_clr.gif", "girl2.gif", "hoola.gif", "mousedance.gif", "water_ski_girl_md_clr.gif", "tv.gif", "burger2.gif", "guitar.gif", "firework.gif", "peek.gif", "chair.gif", "apple.gif", "frog2.gif", "aquarium.gif", "hamst05.gif", "globe.gif", "man_lochness_in_whirlpool_md_clr.gif", "elephant.gif", "brezel.gif")


var imgs = new Array()			// da kommen die bilder rein
var imgloadcounter = 1			// welches bild wird gerade geladen?
var anz = 12						// so viele dinge gleichzeitig
var speed = 8						// höchste geschwindigkeit
var movement = new Array()		// hier stehen gleich die geschwindigkeiten drin

// nicht sehr ehrgeizige browser-erkennung
var dom = (document.getElementById)
var ie = (document.all)
var opera = (navigator.userAgent.indexOf("Opera")>-1)


var bottom = 600		// so weit segeln sie hinab

// bilder laden im interval

for(i=0;i<library.length;i++)
	{
	imgs[i] = new Image()
	}

loadimg()
var loadinterval = setInterval("loadimg()",5000)


// dinge ins Dokument schreiben
// und an zufällige Positionen setzen
if(ie || dom || opera)
	{
	for(i=0;i<anz;i++) {create(i)}
	setInterval("falling()", 128)
	}


function loadimg()
	{
	imgs[imgloadcounter].src = "gifs/" + library[imgloadcounter]
	imgloadcounter++

	if(imgloadcounter==library.length) 
		{
		imgloadcounter--
		clearInterval(loadinterval)
		}
	}


// hier fällt der plunder
function falling()
	{
	if(ie || dom || opera) 
		{
			for(i=0;i<anz;i++)
			{

			// DHTML-Objekt lokalisieren
			var obj
			if(ie)
				{
				eval('obj = document.all.d' + i + '.style')
				}
			else
				{
				eval('obj = document.getElementById("d' + i + '").style')
				}

			var y = parseInt(obj.top)	// aktuelle position (string mit einheit "px")
												// in zahl umwandeln (pixelz)

			y += movement[i]
				
			obj.top = y + "px"
			
			if(ie && (!opera))
				{
				bottom = document.body.offsetHeight
				}
			else
				{
				bottom = innerHeight
				}

			if(y> bottom)					// schon unten angekommen?
				{
				movement[i] = 0

				var picture = random(imgloadcounter)		// ein bild aussuschen
				if(imgs[picture].complete)						// schauen, ob es schon geladen ist
					{
					movement[i] = random(speed)+1				// in bewegung setzen
					eval("document.i" + i + ".src = imgs[" + picture + "].src")
					
					if(ie && (!opera))
						{
						obj.left = (random(document.body.offsetWidth-imgs[picture].width)) + "px"
						}
					else
						{
						obj.left = random(innerWidth-imgs[picture].width) + "px"
						}

					obj.top = (-imgs[picture].height) + "px"

					}
				}
			}
		}
	}



// eine Schneeflocke zeichnen und auch gleich eine 
// Fall-Geschwindigkeit festlegen
function create(n)
	{
	document.write
		(
		'<div id="d' + n + '" style="position:absolute;top:' + -120 + 'px;left:' + random(80) + '%;">',
		'<img src="0.gif" name="i' + n + '">',
		'</div>'
		)
	movement[n] = random(speed)+1;
	}

function random(n)
	{
	return Math.round(Math.random()*n)
	}