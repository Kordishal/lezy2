# Beschreibung

Das Werk Summer ist eine Sammlung von GIFs, welche zusammen ein bewegtes Bild bilden verteilt über viele verschiedene Server, verteilt in der Welt. Jedes Frame des gesammt GIFs wird von einer anderen Person gehostet und einige der Frames werden von mehreren GIFs gehosted.

Es gibt insgesammt 18 verschiedene Frames in diesem GIF. Die Frames bestehen aus ingesammt 28 Bildern. Die Frames 2, 3, 5, 7, 10, 12, 13, 15 und 18 haben zwei Bilder. Der Frame 17 hat drei Varianten. Die verschiedenen Links für das gleiche Frame haben die gleichen Bilder und unterscheiden sich nicht visuell.

## Signifikante Eigenschaften
Die signifikanten Eigenschaften des Werks sollen erhalten bleiben, selbst wenn das Werk in einer anderen Umgebung dargestellt wird.

- Darstellung im Browser
- Wechsel der URL im Browser pro Frame.
- Wechsel des Titels im Browser pro Frame. Dazu gehört der Titel selber als auch das Fav Icon. Der Titel ist bei allen gleich. Fav icon ist manchmal vorhanden und manchmal nicht.
- Die Zeit, die es braucht von einem Server zum nächsten zu springen.
- Darstellung des GIFs im Frame mit Hintergrund.

Ist die Auflösung mit dem das GIF dargestellt wird signifikant? Wenn das GIF auf dem Desktop betrachtet wird, sieht es anders aus, als wenn es im Browser betrachtet wird. War dies früher auch so?

Hat der Gradient der mit CSS erstellt wird immer so ausgehesen? Oder wurde das in älteren Browsern anders gemacht? Und wenn dem so wäre, ist
das wirklich signifikant?

# Forschungsfrage

# Archivierungsziel
Das Ziel der Archivierung ist es die signifikanten Eigenschaften des Werkes zu präservieren. Diese eigenschaften werden 


## Offene Fragen
Auch zeigt es, dass der JavaScript Code robust genug ist, damit umzugehen, wenn einer der Links nicht mehr funktioniert. Wann wird es nicht mehr funktionieren?


# Vorgehen Sichern
In einem ersten Schritt habe ich die Links untersucht mit einem einfachen Python Skript. Die List der Links für jedes einzelne Frame und deren Varianten ist in jeder Seite als JavaScript Liste gespeichert. Diese Liste kann direkt in Python überführt werden und so einfach untersucht und verarbeitet werden.

## Transformation der Liste
Die Liste kann von JavaScript nach Python übertragen werden mit nur zwei kleinen syntaktischen Änderungen:

- Entfernen des Schlüsselwortes `var`.
- Entfernen des Semikolons `;` am Ende der Linie.

So wird aus der Liste gültiger Python Code. Python wird hier verwendet, da es weniger Komponenten benötigt ein Python Skript auszuführen als mit JavaScript.

```javascript
var chain = [["http://1x-upon.com/~despens/olia/summer/"], ["http://www.newrafael.com/olia/summer/", "http://www.entropy8.com/olia/summer/"], ["http://saskia-aldinger.com/olia/summer/"], ["http://www.sebastianschmieg.com/olia/summer/"], ["http://GLI.TC/H/olia/summer/", "http://www.constantdullaart.com/olia/summer/"], ["http://jonaslund.biz/olia/summer/"], ["http://thxalot.org/olia/summer/"], ["http://www.raquelmeyers.com/olia/summer/"], ["http://www.anthonyantonellis.com/olia/summer/"], ["http://www.emiliegervais.com/olia/summer/"], ["http://kimasendorf.com/olia/summer/"], ["http://shorttermmemoryloss.com/olia/summer/"], ["http://todayandtomorrow.net/olia/summer/"], ["http://benfinoradin.info/olia/summer/"], ["http://www.leegte.org/olia/summer/"], ["http://www.faithholland.com/olia/summer/", "http://fernandoalfonso.com/olia/summer/"], ["http://www.evan-roth.com/olia/summer/"], ["http://k0a1a.net/olia/summer/"]];
```

```python
chain = [["http://1x-upon.com/~despens/olia/summer/"], ["http://www.newrafael.com/olia/summer/", "http://www.entropy8.com/olia/summer/"], ["http://saskia-aldinger.com/olia/summer/"], ["http://www.sebastianschmieg.com/olia/summer/"], ["http://GLI.TC/H/olia/summer/", "http://www.constantdullaart.com/olia/summer/"], ["http://jonaslund.biz/olia/summer/"], ["http://thxalot.org/olia/summer/"], ["http://www.raquelmeyers.com/olia/summer/"], ["http://www.anthonyantonellis.com/olia/summer/"], ["http://www.emiliegervais.com/olia/summer/"], ["http://kimasendorf.com/olia/summer/"], ["http://shorttermmemoryloss.com/olia/summer/"], ["http://todayandtomorrow.net/olia/summer/"], ["http://benfinoradin.info/olia/summer/"], ["http://www.leegte.org/olia/summer/"], ["http://www.faithholland.com/olia/summer/", "http://fernandoalfonso.com/olia/summer/"], ["http://www.evan-roth.com/olia/summer/"], ["http://k0a1a.net/olia/summer/"]]
```

Mit dem Skript `extract_links.py` werden die Links aus der Tabelle genommen und in ein CSV mit der Zahl des Frames zu dem es gehört gepackt. Die Tabelle `links.csv` enthält alle Frames und die dazugehörtigen links.

Dies ist nur die Liste der ersten Seite. Diese enthält fast alle, aber nicht ganz alle Schritte. Das JavaScript Skript hat drei verscheidene Versionen mit kleineren Unterschieden innerhalb der Versionen. Nach der ersten Version wurden die restlichen Links manuell zur ersten Chain hinzugefügt. Diese sind nur ein oder zweimal vorhanden und nicht in der allgemeinen Liste.

## Download HTML & GIFS
Das gesamte Werk besteht aus HTML Seiten und GIFs. Die HTML Seiten sind alle verlinkt miteinander und die GIFs sind verlink auf der HTML Seite. Der Link für das GIFS ist immer der gleiche Pfad wie das HTML mit dem filenamen angehängt. Der filename is `olia{frame-nummer}.gif` mit zero padding für die einstelligen Zahlen. Eine Ausnahme ist der Link in Frame 4 da es einen anderen Pfad, deshalb wurde dieser Fall speziell gehandhabt.

Die Files werden in einem Unterordner html und gifs abgelegt. Dabei wird klar, dass einige der Frames nicht mehr erreichbar sind und somit nicht heruntergeladen werden. Die fehlenden Frames sind in `errors.csv` gelistet. Somit ist das Kunstwerk nicht mehr vollständig, da mehrere dieser Frames keine Duplikate mehr haben.

Die Extraktion wurde am 4. Oktober 2023 10:10 CET gemacht.

## Fav Icons

## Wayback Maschine
Um die fehlenden Frames zu Retten wurde die WayBack Maschine des Internet Archives verwendet. Dies wurde manuel gemacht in dem auf
der Webseite https://web.archive.org/ die jeweiligen Links gesucht wurden.

Jede Seite hatte mehrere Resultate und es wurde immer die älteste Version ausgewählt die funktioniert. Die Seiten und Bilder Selber wurden wieder mit einem Skript gemacht.

- https://web.archive.org/web/20130809124522/http://GLI.TC/H/olia/summer/
- https://web.archive.org/web/20130809063951/http://shorttermmemoryloss.com/olia/summer/
- https://web.archive.org/web/20130809060211/http://benfinoradin.info/olia/summer/
- https://web.archive.org/web/20130810052744/http://www.faithholland.com/olia/summer/
- https://web.archive.org/web/20130809094219/http://fernandoalfonso.com/olia/summer/ (ohne GIF)


Extraktion der Links die Funktionieren war eine Challenge, da das Skript jeweils dazu geführt hat einen neuen Link anzuwählen. Interessanterweise, sind die Links auf der Wayback Machine geblieben.

Der Link von Fernando Alfonso findet auch auf der Wayback Maschine das GIF nicht mehr. Ich habe Stichproben gemacht über alle
Versionen und es gibt keine Version wo das GIF funktioniert. Da aber das das GIF 16 ist und dieses doppelt vorhanden ist, wird es nicht benötigt. Zumindest bei den anderen beiden Frames die doppelt vorhanden sind ist das GIF sieht das GIF gleich aus.

### Unterschiede JavaScript
Die Umsetzung der Funktionalität zum weiterleiten zum nächsten Bild ist auf allen Seiten unterschiedlich.

# Umsetzung Präservation


### HTTP vs. HTTP
Im Original sind alle Links in HTTP angegeben. Dies führt dazu, dass jeder Moderne Browser eine Warnung wirft die aktuell zwar noch ignoriert werden kann, aber dies wird sich möglicherweise in der Zukunft ändern.

Es macht deshalb Sinn die Links in der präservierten version mit HTTPS auszuführen, damit Betrachterinnen diese Fehlermeldungen nicht erhalten.

### Uncode issue

Der Titel besteht aus dem Unicode zeichen ☼. Dieses Zeichen wird als [white sun with rays](https://en.wikipedia.org/wiki/Miscellaneous_Symbols) bezeichnet. Der Unicode Character is `U+263C`.

Das Symbol wird in mehreren HTML Dokumenten falsch angezeigt, was darauf hindeuted, dass das Zeichen nicht mit UFT-8 Kodiert wurde. Es funktioniert aber immernoch korrekt und wird deshalb nicht angepasst.


