var entrada = document.querySelector("input");
var palabra = entrada.value;
var palsec = "manzana verde";
var imagen = document.querySelector("img");
var boton = document.getElementById("b1");
var mensaje = document.querySelector("p");
document.getElementById("c1").style.display = "none";
document.getElementById("labcont").style.display = "none";
function analizarPalabra(x, y){
    var letraencontrada = 0;
    for (i = 0; i < x.length; i++) {
        if (y.includes(x[i])){
            letraencontrada++;
        }
    }
    return letraencontrada;
}

function analizar(){
    var cont = 0;
    var arraypalabra = entrada.value.split('');
    var arraypalsec = palsec.split('');
    var cant = analizarPalabra(arraypalabra, arraypalsec);
    if (entrada.value === palsec) {
        imagen.setAttribute("src", "imagen1.jpg");
        mensaje.textContent = "¡Lo Lograste!";
        imagen.addEventListener("click", function(){
           cont++;
           console.log("cont");
           var conteo = document.getElementById("c1");
           conteo.value = cont; 
           document.getElementById("c1").style.display = "block";
           document.getElementById("labcont").style.display = "block";
       }) 
        
    }
    else if (cant > (arraypalabra.length/2)){
        imagen.setAttribute("src", "imagen2.jpg");
        cont = 0;
        document.getElementById("c1").style.display = "none";
        document.getElementById("labcont").style.display = "none";
        mensaje.textContent = "Estuviste Cerca";
    }
    else{
        
        imagen.setAttribute("src", "imagen3.jpg");
        cont = 0;
        document.getElementById("c1").style.display = "none";
        document.getElementById("labcont").style.display = "none";
        mensaje.textContent = "Intentalo Nuevamente";
    }
}
boton.addEventListener("click", analizar);
