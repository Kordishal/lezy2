var next = ['https://web.archive.org/web/20130809124522/http://jonaslund.biz/olia/summer/'];
window.onload = function(){
    setTimeout(function(){
        top.location = next[Math.floor(Math.random()*next.length)];
    }, 150);
}