# Inhalt
Eine Liste aller Dokumente in diesem Repositorium und deren Zweck.

## archiv
Der Ordner Archiv behinhaltet alle relevantent Dateien pro Webseite und die Skripte, um diese Ordner zu erstellen.

### webseite
Jeder Unterordner in diesem Ordner ist eine Webseite die Teil des Werkes ist. Die Struktur ist entsprechen abhängig davon, wie die
Webseite genau aufgebaut ist. Jeder Ordern hat eine index.html Seite, ein olia.gif Datei und verschiedene haben noch ein favicon.ico.

- [copy_facicon.py](archiv/copy_favicon.py). Diese Skript nimmt die favicons aus dem `original` Ordner und fügt sie zur webseite hin. Da die index.html Seiten keine Referenz zum favicon enthalten wird dieses von wget nicht geladen.

- [wget_script.py](archiv/wget_script.py). Ein einfaches Skrip im den wget command.









- `index.html`. HTML Seite von https://art.teleportacia.org/olia/summer/. Dies ist die Danksagungsseite des Werkes.