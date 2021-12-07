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

    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *Banquetes Mireles*%0A
          *Quisiera consultar mi:* Aquí escriba qué deseas consultar%0A`;
    window.open(url);
});