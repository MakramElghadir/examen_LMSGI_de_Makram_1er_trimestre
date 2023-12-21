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
        document.querySelector("#pulsada").style.color = "white"
        document.querySelector("#pulsada").style.background = "black";
    }
    if (conta == 5) {
        document.querySelector("#pulsada").innerHTML = "Has pulsado el boton" 
        conta = 1
        document.querySelector("#pulsada").style.color = "black"
        document.querySelector("#pulsada").style.background = null;
    }
}