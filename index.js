// comillas ->   ''
function Aceptar(){
     var nombre = document.getElementById("nombre").value;
     if(nombre == "nikcol"||nombre =="Nikcol"||nombre =="NIKCOL"||nombre =="nikcy"||nombre =="Nikcy"||nombre =="NIKCY"){
          var textoh1 = document.getElementById("h1").innerHTML = "Hola "+nombre +", eres hermosa!💖";
          var textoh2 = document.getElementById("h2").innerHTML = "OQTP :)";
     }
     else if(nombre=="anayeli"||nombre=="ANAYELI"||nombre=="Anayeli"){
          var textoh1 = document.getElementById("h1").innerHTML = "Hola Yeyi :3"+", eres hermosa!💖";
          var textoh2 = document.getElementById("h2").innerHTML = "OQTP :)";
     }
     else if(nombre==""){
          var textoh1 = document.getElementById("h1").innerHTML = "Escribe tu nombre :)";
          var textoh2 = document.getElementById("h2").innerHTML = "zzz";
     }
     else{
          var textoh1 = document.getElementById("h1").innerHTML = "Lo siento "+nombre +", esta página no es para ti";
          var textoh2 = document.getElementById("h2").innerHTML = "Vete";
     } 
     
}
function Triste(){
     
     document.write("asdsad");
}
function Molesta(){
     
     document.write("asdsad");
}
function Aburrida(){
     
     document.write("asdsad");
}
function Confundida(){
     
     document.write("asdsad");
}
function Asustada(){
     
     document.write("asdsad");
}