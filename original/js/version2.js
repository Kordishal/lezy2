var chain = [["http://www.faithholland.com/olia/summer/"], ["http://www.evan-roth.com/olia/summer/"]];
var step = 0;
var select_next = function(){return Math.floor(Math.random()*chain[step].length)};
var branch;
var branch_initial = branch = select_next();

window.onload = function(){
    setTimeout(function(){
        top.location = chain[step][branch];
    }, 150);
    setInterval(function(){
        branch++;
        if(branch == chain[step].length) branch = 0;
        if(branch == branch_initial) {
            step++;
            if(step == chain.length) step = 0;
            branch_initial = branch = select_next();
        }
        top.location = chain[step][branch]
    }, 3000)
}