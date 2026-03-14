document.getElementById("contactForm").addEventListener("submit", function(e){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

if(name === "" || email === ""){
alert("Name and Email are required!");
e.preventDefault();
}

});
