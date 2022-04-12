window.addEventListener("load", init);

function CLS(elem) {
    return document.getElementsByClassName(elem);
}

function $(elem) {
    return document.querySelectorAll(elem);
}

const kepek = ['kepek/kep19.jpg', 'kepek/kep19.jpg', 'kepek/kep20.jpg', 'kepek/kep20.jpg', 'kepek/kep15.jpg', 'kepek/kep15.jpg', 'kepek/kep9.jpg', 'kepek/kep9.jpg', 'kepek/kep6.jpg', 'kepek/kep6.jpg'];

function init() {
    let text = "";
    kepek.forEach(function (kepekAktElem, index) {
        text += "<img src=" + 'kepek/hatter.jpg' + " id="+ index +" alt='szornyek'>";
    });
    CLS('memogame')[0].innerHTML = text;
    
    const kepekTomb = document.querySelectorAll('.memogame img');
    console.log(kepekTomb);
    kepekTomb.forEach(function(kepElem){
        kepElem.addEventListener("click", megfordit);
    });

}
const kivalasztottKep = []
function megfordit() {
    let aktIndex = event.target.id;
    event.target.src = kepek[aktIndex];
    console.log(aktIndex);

    kivalasztottKep.push(aktIndex);
    console.log(kivalasztottKep);

    event.target.removeEventListener("click", megfordit);
    if(kivalasztottKep.length === 2){
        let feltetel =
            kepek[kivalasztottKep[0]] ===
            kepek[kivalasztottKep[1]];
        console.log(feltetel);
    if (!feltetel) {
            setTimeout(function(){
            kivalasztottKep.forEach(function(elem){
                document.getElementById(elem).src = 'kepek/hatter.jpg';
            });
            kivalasztottKep.splice(0);
            }, 1000);
        }
     else {
        kivalasztottKep.forEach(function(elem){
            document.getElementById(elem).style.display = "none";
        });}
    
    kepekTomb.forEach(function(kepElem){
        kepElem.addEventListener("click", megfordit);
    });
}
}
