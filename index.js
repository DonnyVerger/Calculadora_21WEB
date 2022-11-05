const formDom = document.getElementById("formulario");
var elemento2 ="";
var elemento1 ="";
var operando = "";
const cero = document.getElementById("0");
const uno = document.getElementById("1");
const dos = document.getElementById("2");
const tres = document.getElementById("3");
const cuatro = document.getElementById("4");
const cinco = document.getElementById("5");
const seis = document.getElementById("6");
const siete = document.getElementById("7");
const ocho = document.getElementById("8");
const nueve = document.getElementById("9");
const reset = document.getElementById("c");
const suma = document.getElementById("+");
const resta = document.getElementById("-");
const multiplicacion = document.getElementById("*");
const division = document.getElementById("/");
const igual = document.getElementById("=");

reset.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value = "";
    console.log("c");
    document.getElementById("formulario").reset();
});
suma.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "+";
    console.log("+");
});
resta.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "-";
    console.log("-");
});
multiplicacion.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "*";
    console.log("*");
});
division.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "/";
    console.log("/");
});
igual.addEventListener("click", (evento)=>{
    evento.preventDefault();
    // document.getElementById("campo").value += "=";
    console.log("=");
    muResultado();
    elemento2 ="";
    elemento1 ="";
    operando = "";
});
cero.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "0";
    console.log("0");
});
uno.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "1";
    console.log("1");
});
dos.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "2";
    console.log("2");
});
tres.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "3";
    console.log("3");
});
cuatro.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "4";
    console.log("4");
});
cinco.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "5";
    console.log("5");
});
seis.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "6";
    console.log("6");
});
siete.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "7";
    console.log("7");
});
ocho.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "8";
    console.log("8");
});
nueve.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "9";
    console.log("9");
});
function miSuma(){}
function miResta(){}
function miMultiplicacion(){}
function miDivision(){}

function muResultado(){
    let input = document.getElementById("campo").value;
    let comprobar = Array.from(input);
    
    var bandera = false;
    let index = 0
    while(index < comprobar.length) {
        if(((comprobar[index] != '+' && comprobar[index] != "-" && comprobar[index] != "*" && comprobar[index] != "/") && bandera != true)){
            elemento1 += comprobar[index];
            index++;
        }else{
            bandera = true;
            if(comprobar[index] == "+"){
                var operando = "+";
                // index++;
            }
            else if(comprobar[index] == "-"){
                var operando = "-";
                // index++;
            }
            else if(comprobar[index] == "*"){
                var operando = "*";
                // index++;
            }
            else if(comprobar[index] == "/"){
                var operando = "/";
                // index++;
            }else if(comprobar[index] != "+" && comprobar[index] != "-" && comprobar[index] != "*" && comprobar[index] != "/"){
                elemento2 += comprobar[index];
                // index++;
            }
            index++;
        }
    }
    if(operando == "+"){
        let res = parseInt(elemento1) + parseInt(elemento2);
        console.log(res)
        document.getElementById("campo").value = "";
        document.getElementById("campo").value += res;
    }
    else if(operando == "-"){
        let res = parseInt(elemento1) - parseInt(elemento2);
        console.log(res)
        document.getElementById("campo").value = "";
        document.getElementById("campo").value += res;
    }
    else if(operando == "*"){
        let res = parseInt(elemento1) * parseInt(elemento2);
        console.log(res)
        document.getElementById("campo").value = "";
        document.getElementById("campo").value += res;
    }
    else if(operando == "/"){
        let res = parseInt(elemento1) / parseInt(elemento2);
        console.log(res)
        document.getElementById("campo").value = "";
        document.getElementById("campo").value += res;
    }
}
