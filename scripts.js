const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliquieNoBotao() {
    form.style.left = "50%";
    form.style.transform = "translateX(-160px)"
    mascara.style.visibility = "visible";
}

function cliqueNaMascara(){
    form.style.left = "-300px";
     form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden";
}