const calendario = document.querySelector(".calendario") ,
fecha = document.querySelector(".fecha"),
contenedordias = document.querySelector(".dias");
anterior = document.querySelector(".anterior");
proximo = document.querySelector(".proximo")


let hoy = new Date();
let mes = hoy.getFullmonth();
let año = hoy.getFullYear();

const meses = [
"enero",
"febrero",
"marzo",
"abril",
"mayo",
"junio",
"julio",
"agosto",
"septiembre",
"octubre",
"noviembre",
"diciembre",

]



