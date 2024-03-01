window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
});



function elemekElerese1() {
    /**Ide jön az első feladat */
    const ELEM=document.querySelectorAll("section h2")[0]
    console.log(ELEM)
}
function elemekElerese2() {
    const ID=document.getElementById("ide")
    ID.innerHTML = `<p>Jó reggelt!</p>`
}
function elemekElerese3() {
    const QUERY=document.querySelectorAll(".ide")[0]
    QUERY.innerHTML = `<p>Jó reggelt</p>`
}
function elemekElerese4() {
    const LISTAELEM = document.querySelectorAll(".lista")[0]
    let txt = `<ul>`
    for (let index = 0; index < 5; index++) {
        let randomSzam = Math.random()*20+10
        txt += `<li>${Math.floor(randomSzam)}</li>`
    }
    txt += `</ul>`
    LISTAELEM.innerHTML += txt
}
function elemekFormazasa1() {
    const LISTAELEM = document.querySelectorAll(".lista")[0]
    LISTAELEM.classList.add("formazott")
}
function esemenyKezeles1(elemekElerese1) {
    LISTAELEM.addEventListener("gomb",esemenyKezeles1)
    
}

