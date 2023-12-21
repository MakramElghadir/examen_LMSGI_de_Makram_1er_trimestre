console.log("holy script connected")
var conta = 0
console.log(conta)

function pulsador() {
    console.log("consecrated input detected")
    document.querySelector("#pulsada").innerHTML = "Has pulsado el boton"
    conta += 1
    console.log(conta)
    if (conta == 2) {
        document.querySelector("#pulsada").innerHTML = "Has vuelto a pulsado el boton" 
    }
    if (conta == 3) {
        document.querySelector("#pulsada").innerHTML = "HAS VUELTO A PULSAR EL BOTON!" 
    }
    if (conta == 4) {
        document.querySelector("#pulsada").innerHTML = "HAS VUELTO A PULSAR EL BOTON!" 
        document.querySelector("#plusada").style.color = "white";
        document.querySelector("#plusada").style.background = "black";
    }
    if (conta == 5) {
        document.querySelector("#pulsada").innerHTML = "Has pulsado el boton" 
        conta = 1
    }
}