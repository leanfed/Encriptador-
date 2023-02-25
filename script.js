

function encriptar() {

    let texto = document.getElementById("input1").value;
    let flag = true;
    let noPermitido = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZñáéíóú";

    if (texto.length == 0) {
        flag = false;
        swal("Usted no ha ingresado ningún valor!")
    }


    for (let i = 0; i < texto.length; i++) {

        for (let j = 0; j < noPermitido.length; j++) {
            if (texto[i] === noPermitido[j]) {
                flag = false;

            }

        }

    }

    if (flag) {

        let palabra = ""
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] != "a" && texto[i] != "e" && texto[i] != "i" && texto[i] != "o" && texto[i] != "u") {
                palabra = palabra + texto[i]
            } else {
                if (texto[i] === "a") palabra = palabra + "ai"
                if (texto[i] === "e") palabra = palabra + "enter"
                if (texto[i] === "i") palabra = palabra + "imes"
                if (texto[i] === "o") palabra = palabra + "ober"
                if (texto[i] === "u") palabra = palabra + "ufat"
            }
        }

        document.getElementById("munhe").style.display = "none";
        document.getElementById("textA").style.display = "none";
        document.getElementById("text2").innerHTML = palabra;
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";
        document.getElementById("input1").value = "¡Su encriptación fue exitosa!"
        document.getElementById('titulo').innerHTML = " ";
        document.getElementById("text2").style.height ="280px"


    } else {
        if (texto.length !== 0) {
            swal("Sólo se permite el ingreso de letras minúsculas y sin tildes!");
            document.getElementById("input1").value = ""
        }
    }
}


function desencriptado() {
    let texto = document.getElementById("input1").value;
    let flag = true;
    let noPermitido = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZñáéíóú";

    if (texto.length == 0) {
        flag = false;
        swal("Usted no ha ingresado ningún valor!")
    }


    for (let i = 0; i < texto.length; i++) {

        for (let j = 0; j < noPermitido.length; j++) {
            if (texto[i] === noPermitido[j]) {
                flag = false;

            }

        }

    }

    if (flag) {

        let desencripto = texto.replace(/ai/igm, "a")
        desencripto = desencripto.replace(/enter/igm, "e")
        desencripto = desencripto.replace(/imes/igm, "i")
        desencripto = desencripto.replace(/ober/igm, "o")
        desencripto = desencripto.replace(/ufat/igm, "u")

        document.getElementById("munhe").style.display = "none";
        document.getElementById("textA").style.display = "none";
        document.getElementById("text2").innerHTML = desencripto;
        document.getElementById("input1").value = "¡Su desencriptación fue exitosa!"
    }
    else {
        if (texto.length !== 0) {
            swal("Sólo se permite el ingreso de letras minúsculas y sin acentos!");
            document.getElementById("input1").value = ""
        }

    }
}

function copy() {
    let copiado = document.getElementById("text2");
    copiado.select();
    document.execCommand('copy');

    document.getElementById("text2").innerHTML = "¡Texto copiado con éxito!";
    document.getElementById("input1").value = ""
    document.getElementById('copiar').style.display = "show";
    document.getElementById('munhe').style.display = "show";

}

/* Mensaje secreto: 

graicimesais poberr vimessimestairnobers y ufatsair nufatenterstrober enterncrimesptaidoberr 

*/