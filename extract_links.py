chain = [
    ["http://1x-upon.com/~despens/olia/summer/"], 
    ["http://www.newrafael.com/olia/summer/", "http://www.entropy8.com/olia/summer/"], 
    ["http://saskia-aldinger.com/olia/summer/", "http://www.nikoprincen.com/olia/summer/"], 
    ["http://www.sebastianschmieg.com/olia/summer/"], 
    ["http://GLI.TC/H/olia/summer/", "http://www.constantdullaart.com/olia/summer/"], 
    ["http://jonaslund.biz/olia/summer/"], 
    ["http://thxalot.org/olia/summer/", "http://bukk.it/olia/summer"], 
    ["http://www.raquelmeyers.com/olia/summer/"], 
    ["http://www.anthonyantonellis.com/olia/summer/"], 
    ["http://www.emiliegervais.com/olia/summer/", "http://kevinbewersdorf.org/olia/summer/"], 
    ["http://kimasendorf.com/olia/summer/"], 
    ["http://shorttermmemoryloss.com/olia/summer/", "http://jamesbridle.com/olia/summer/"],
    ["http://todayandtomorrow.net/olia/summer/", "http://www.bram.org/olia/summer"], 
    ["http://benfinoradin.info/olia/summer/", "http://www.jaka.org/olia/summer/"], 
    ["http://www.leegte.org/olia/summer/"], 
    ["http://www.faithholland.com/olia/summer/", "http://fernandoalfonso.com/olia/summer/"], 
    ["http://www.evan-roth.com/olia/summer/"], 
    ["http://k0a1a.net/olia/summer/", "http://reas.com/olia/summer/"]
]

print("Anzahl der Frames Total:", len(chain))
print("Anzahl der Links Total:", sum([len(x) for x in chain]))

with open("datenbank.csv", "w") as f:
    f.write("frame,link\n")
    for i in range(len(chain)):
        for link in chain[i]:
            f.write(f"{i + 1},{link}\n")