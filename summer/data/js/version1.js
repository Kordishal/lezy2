var chain = [["http://1x-upon.com/~despens/olia/summer/"], ["http://www.newrafael.com/olia/summer/", "http://www.entropy8.com/olia/summer/"], ["http://saskia-aldinger.com/olia/summer/"], ["http://www.sebastianschmieg.com/olia/summer/"], ["http://GLI.TC/H/olia/summer/", "http://www.constantdullaart.com/olia/summer/"], ["http://jonaslund.biz/olia/summer/"], ["http://thxalot.org/olia/summer/"], ["http://www.raquelmeyers.com/olia/summer/"], ["http://www.anthonyantonellis.com/olia/summer/"], ["http://www.emiliegervais.com/olia/summer/"], ["http://kimasendorf.com/olia/summer/"], ["http://shorttermmemoryloss.com/olia/summer/"], ["http://todayandtomorrow.net/olia/summer/"], ["http://benfinoradin.info/olia/summer/"], ["http://www.leegte.org/olia/summer/"], ["http://www.faithholland.com/olia/summer/", "http://fernandoalfonso.com/olia/summer/"], ["http://www.evan-roth.com/olia/summer/"], ["http://k0a1a.net/olia/summer/"]];
var step = 1;
var branch_initial = branch = Math.floor(Math.random()*chain[step].length);

window.onload = function(){
    setTimeout(function(){
        top.location = chain[step][branch];
    }, 150);
    setInterval(function(){
        branch++;
        if(branch == chain[step].length) branch = 0;
        if(branch == branch_initial) {
            branch_initial = branch = 0;
            step++;
            if(step == chain.length) step = 0;
        }
        top.location = chain[step][branch]
    }, 3000)
}