// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:

// Debe funcionar solo con letras minúsculas
// No deben ser utilizados letras con acentos ni caracteres especiales
// Debe ser posible convertir una palabra para la versión encriptada también devolver
//una palabra encriptada para su versión original.
// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

// La página debe tener campos para
// inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
// El resultado debe ser mostrado en la pantalla.
//     Extras:

// Un botón que copie el texto encriptado / desencriptado para la sección de transferencia,
//o sea que tenga la misma funcionalidad del ctrl + C o de la opción "copiar" del menú de las aplicaciones.
// Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a trabajar con el
//sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

var botonEncriptar = document.querySelector(".btn_encriptar");
var botonDesencriptar = document.querySelector(".btn_desencriptar");
var muneco = document.querySelector(".muneco");
var contenedor = document.querySelector(".contenedor_parrafo");
var resultado = document.querySelector(".texto_resultado");
var botonCopiar = document.querySelector(".contenedor_copiar")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.classList.add("ocultar");
resultado.classList.add("ocultar")
function encriptar() {
    ocultarAdelante();
    mostrar();
    var cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
   // console.log(cajatexto);

    
}
function desencriptar() { 
    ocultarAdelante();
    mostrar();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
    // console.log(cajatexto);
}
function recuperarTexto() {
    var cajatexto = document.querySelector(".caja_texto");
    return cajatexto.value;
    
}
function mostrar() {
    botonCopiar.classList.remove("ocultar");
    resultado.classList.remove("ocultar");
}
function ocultarAdelante() {
     muneco.classList.add("ocultar");
     contenedor.classList.add("ocultar");
    
}
function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a") {
            textoFinal = textoFinal + "ai"
            
        }
        else if(texto[i] == "e") {
            textoFinal = textoFinal + "enter";
            
        }
        else if(texto[i] == "i") {
            textoFinal = textoFinal + "imes";
            
        }
        else if(texto[i] == "o") {
            textoFinal = textoFinal + "ober";
            
        }
        else if(texto[i] == "u") { 
            textoFinal = textoFinal + "ufat";
            
        }
        else {
            textoFinal = textoFinal + texto[i];
        }

    }
    return textoFinal;
    
}
function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";
    for (var i = 0; i < texto.length; i++){
        if (texto[i] == "a") { 
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i + 3;
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

const btnCopiar = document.querySelector(".btn_copiar");
    btnCopiar.addEventListener("click", copiar = () => { 
        var contenido = document.querySelector(".texto_resultado").textContent
        navigator.clipboard.writeText(contenido);
        console.log("copiado");
        
    })