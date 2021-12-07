// CONECTIVIDAD CON WHATSAPP

// document.querySelector('#submit').addEventListener('click', function () {

//     let cliente = document.querySelector('cliente').value;
//     let fecha = document.querySelector('cliente').value;
//     let hora = document.querySelector('cliente').value;
//     let banquetes = document.querySelector('cliente').value;
//     let servicio = document.querySelector('cliente').value;

//     let url = "https://api.whatsapp.com/send?phone5591907022&text=*_BanquetesMireles_*%0A%0A*¿Qué servicio desea?*%0A" + cliente + "*%0A*Indica la fecha del evento*%0A" + fecha + "*%0A*Menciona la hora del evento*%0A*" + hora + "*%0A*¿Qué tipo de servicio será?*%0A*" + banquetes + "*%0A*¿Qué esperas del servicio?*%0A*" + servicio;

//     window.open(url);
// });
document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();

    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "+52 1 5531479800";

    let cliente = document.querySelector("#cliente").value;
    let fecha = document.querySelector("#fecha").value;
    // let hora = document.querySelector("#hora").value;
    // let empleado = document.querySelector("#empleado").value;
    let servicio = document.querySelector("#servicio").value;
    let resp = document.querySelector("#respuesta"); 
    let email = document.querySelector("#correo").value; 
    let alcaldia = document.querySelector("#alcaldia").value; 
    let invitados = document.querySelector("#cantidad").value; 
    let sendme = document.querySelector("#sendme").value;   
    resp.classList.remove("fail");
    resp.classList.remove("send");

    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *Banquetes Mireles*%0A
          *Tu solicitud es la siguiente:*%0A%0A
          *¿Cuál es tu nombre?*%0A
          ${cliente}%0A
          *Indica la fecha de tu reserva*%0A
          ${fecha}%0A
          *¿Cuál es el servicio que se desea rentar?*%0A
          ${servicio}%0A
          *correo*%0A
          ${email}%0A
          *Vivo en la alcaldia*%0A
          ${alcaldia}%0A
          *Cantidad de invitados*%0A
          ${invitados}%0A
          *Información sobre tu evento*%0A
          ${sendme}`;

    if (cliente === "" || fecha === "" || email === "" || alcaldia === "" || invitados === "" || sendme === "") {
        resp.classList.add("fail");
        resp.innerHTML = `Faltan algunos datos, ${cliente}`;
        return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

    window.open(url);
});