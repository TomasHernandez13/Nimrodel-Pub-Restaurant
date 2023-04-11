function showComu() {
    document.getElementById("comuniquemonos").style.display = "block";
  }

function showRes() {
    document.getElementById("reserva").style.display = "block";
}

$(document).ready(function (){
    let nombre = "";
    let correo = "";
    let telefono = "";
    let motivo = "";
    let comentarios = "";
    let asistentes = "";
    let fecha = "";
    let hora = "";


    $("#enviar").click(function (){
        nombre = $("#nombre").val();
        correo = $("#correo").val();
        telefono = $("#telefono").val();
        motivo = $("#motivo").val();
        comentarios = $("#comentarios").val();
        if(!nombre){
            alert(`Falta tu nombre`)   
        }
        else if(!correo){
            alert(`Falta tu correo`)
        }
        else if(!telefono){
            alert(`Falta tu numero`)
        }
        else if(!motivo){
            alert(`Falta tu motivo`)
        }
        else if(!comentarios){
            alert(`Falta tu comentario`)
        }
        else if(!asistentes-reserva){
            alert(`Falta el numero de asistentes`)
        }
        else
        alert(`Gracias ${nombre} Hemos recibido tu sugerencia y enviaremos una pronta respuesta al correo ${correo}`)
    })
    

    $("#enviar-reserva").click(function (){
        nombre = $("#nombre-reserva").val();
        correo = $("#correo-reserva").val();
        telefono = $("#telefono-reserva").val();
        fecha = $("#fecha-reserva").val();
        hora = $("#hora-reserva").val();
        asistentes = $("#asistentes-reserva").val();
        if(!nombre){
            alert(`Falta tu nombre`)   
        }
        else if(!correo){
            alert(`Falta tu correo`)
        }
        else if(!telefono){
            alert(`Falta tu numero`)
        }
        else if(!fecha){
            alert(`Falta tu fecha`)
        }
        else if(!hora){
            alert(`Falta tu hora`)
        }
        else if(!asistentes){
            alert(`Falta tu numero de asistentes`)
        }
        else
        alert(`Gracias ${nombre} Hemos recibido tu reserva. Hemos registrado ${asistentes} asistentes y enviaremos una pronta respuesta al correo ${correo}`)
    })

    $("#bebidas-click").click(function(){
        $("#bebidas-above").css("display", "block")
    })
    $("#bebidas-above").mouseleave(function(){
        $("#bebidas-above").css("display", "none")
    })
    $("#tablas-click").click(function(){
        $("#tablas-above").css("display", "block")
    })
    $("#tablas-above").mouseleave(function(){
        $("#tablas-above").css("display", "none")
    })
    $("#shop-click").click(function(){
        $("#shop-above").css("display", "block")
    })
    $("#shop-above").mouseleave(function(){
        $("#shop-above").css("display", "none")
    })
})

// function thanks() {
//     let nombre = document.querySelector("#nombre").value;
//     let correo = document.querySelector("#correo").value;
//     let telefono = document.querySelector("#telefono").value;
//     let motivo = document.querySelector("#motivo").value;
//     let comentarios = document.querySelector("#comentarios").value;
    
//     if(!nombre){
//         alert(`Falta tu nombre`)   
//     }
//     else if(!correo){
//         alert(`Falta tu correo`)
//     }
//     else if(!telefono){
//         alert(`Falta tu numero`)
//     }
//     else if(!motivo){
//         alert(`Falta tu motivo`)
//     }
//     else if(!comentarios){
//         alert(`Falta tu comentario`)
//     }
//     else if(!asistentes-reserva){
//         alert(`Falta el numero de asistentes`)
//     }
//     else
//     alert(`Gracias ${nombre} Hemos recibido tu sugerencia y enviaremos una pronta respuesta al correo ${correo}`)
// }

// function thanksReserva() {
//     let nombre = document.querySelector("#nombre-reserva").value;
//     let correo = document.querySelector("#correo-reserva").value;
//     let telefono = document.querySelector("#telefono-reserva").value;
//     let fecha = document.querySelector("#fecha-reserva").value;
//     let hora = document.querySelector("#hora-reserva").value;
//     let asistentes = document.querySelector("#asistentes-reserva").value;

    // if(!nombre){
    //     alert(`Falta tu nombre`)   
    // }
    // else if(!correo){
    //     alert(`Falta tu correo`)
    // }
    // else if(!telefono){
    //     alert(`Falta tu numero`)
    // }
    // else if(!fecha){
    //     alert(`Falta tu fecha`)
    // }
    // else if(!hora){
    //     alert(`Falta tu hora`)
    // }
    // else if(!asistentes){
    //     alert(`Falta tu numero de asistentes`)
    // }
    // else
    // alert(`Gracias ${nombre} Hemos recibido tu reserva y enviaremos una pronta respuesta al correo ${correo}`)
// }