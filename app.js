document.addEventListener("DOMContentLoaded", function(){
    console.log(document.getElementById("txt_nombre").value);
    console.log(document.getElementById("txt_nombre").value);
    console.log(document.getElementById("txt_email").value);
    console.log(document.getElementById("txt_telefono").value);
    console.log(document.getElementById("txt_direccion").value);

});

const btn_guardar = document.getElementById("btn_guardar");
btn_guardar.addEventListener("click", function() {
    console.log('haciendo click ');
    alert("Correcto");

    const nombre= document.getElementById("txt_nombre").value;
    const email = document.getElementById("txt_email").value;
    const telefono = document.getElementById("txt_telefono").value;
    const dirección = document.getElementById("txt_direccion").value;

    console.log('nombre ' +nombre+ ', email ' +email+ ', telefono ' + telefono+ ', dirección ' + dirección);
    alert('nombre ' +nombre+ ', email ' +email+ ', telefono ' + telefono+ ', dirección ' + dirección);

    const nombre_mascota= document.getElementById("txt_nombre_mascota").value;
    const tipo_mascota = document.getElementById("txt_tipo_mascota").value;
    const raza = document.getElementById("txt_raza").value;
    const edad = document.getElementById("txt_edad").value;

    console.log('nombre_mascota ' +nombre_mascota+ ', tipo_mascota ' +tipo_mascota+ ', raza ' + raza+ ', edad ' + edad);
    alert('nombre_mascota ' +nombre_mascota+ ', tipo_mascota ' +tipo_mascota+ ', raza ' + raza+ ', edad ' + edad);

    

});

function hola(nombre, email,telefono,dirección) {
    console.log(nombre, email,telefono,dirección);
}
function hello(nombre_mascota, tipo_mascota,raza,edad){
    console.log(nombre_mascota,tipo_mascota,raza,edad)
}