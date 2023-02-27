//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false
    }
}//Oculto el menú una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x =links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
//Creo las barritas de una barra particular identificada por su ID
function crearBarra(id_Barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_Barra.appenChild(div);
    }
}
//Selecciono todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let photosop = document.getElementById("photoshop");
crearBarra(photoshop);
let php = document.getElementById("php");
crearBarra(php);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);

let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

function efectoHabilidad(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight = habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 16, 0, intervalJavascript);
        },100);
        const intervalWordpress = setInterval(function(){
            pintarBarra(wordpress, 16, 0, intervalWordpress);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photosop, 16, 0, intervalPhotoshop);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 16, 0, intervalPhp);
        },100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(ilustrator, 16, 0, intervalIlustrator);
        },100);
    }
}

//Con esto lleno las barras con el porcentage
function pintarBarra(id_Barra, cantidad, indice, interval){
    contadores(indice)++;
    x = contadores(indice);
    if(x = cantidad){
        let elementos = id_Barra.getElementsByClassName("e");
        elementos(x).style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto
window.onscroll = function(){
    efectoHabilidad();
}
