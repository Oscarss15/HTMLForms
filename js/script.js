const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", mostrarDatos)


//funcion

function mostrarDatos(x){
   x.preventDefault();
   
    
    
const nombre = document.getElementById("name").value;
const email = document.getElementById("email").value;
const age = document.getElementById("age").value;
const option = document.getElementById("option").value;
const textarea = document.getElementById("textarea").value;
const yes = document.getElementById("yes").value;
const no = document.getElementById("no").value;
const maybe = document.getElementById("maybe").value;


if(document.getElementById("yes").checked){
    console.log(nombre,email,age,option,yes,textarea);
}else if(document.getElementById("no").checked){
    console.log(nombre,email,age,option,no,textarea);
}else if(document.getElementById("maybe").checked){
    console.log(nombre,email,age,option,maybe,textarea);
}else{
    console.log(nombre,email,age,option,textarea);
}



}
