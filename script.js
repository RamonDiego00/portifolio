// MUDAR CONTEUDO DE SKILLS

function toggle(altera) {

    
        let skills = document.querySelector(`.${altera}`);
        skills.classList.toggle("desativado");
        // skills.classList.remove("desativado");
        
    }

// ALTERAR CORES DE FUNDO DE SKILLS
function backColors(altera) {
    let container = document.querySelector(`.habilidades`);
    container.classList.toggle(`${altera}Style`)
}

function backGray(altera) {
    let container = document.querySelector(`.habilidades`);

    container.addEventListener("mouseup", function(e) {
        setTimeout(function() {
            container.classList.remove(`${altera}Style`)
        }, 3000)});

}

// MUDAR DE TEMA

window.onload=function(){

    const html = document.querySelector("html")
    const checkbox = document.querySelector("input[name=theme]")
    
    const getStyle = (element, style) => 
        window
            .getComputedStyle(element)
            .getPropertyValue(style)
    
    
    const initialColors = {
        bg1: getStyle(html, "--bg1"),
        bg2: getStyle(html, "--bg2"),
        colorText: getStyle(html, "--color-text"),
        colorHeader:getStyle(html, "--color-header"),
        colorBlocks:getStyle(html, "--color-blocks"),
        filterSvg:getStyle(html, "--filter-svg" )
    }
    
    const whiteMode = {
        bg1: "#b4b4b4",
        bg2: "#cecece",
        colorText: "#00000",
        colorHeader: "#ffff",
        colorBlocks: "#A8A8A8",
        filterSvg: "null"
    }
    
    const transformKey = key => 
        "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()
    
    
    const changeColors = (colors) => {
        Object.keys(colors).map(key => 
            html.style.setProperty(transformKey(key), colors[key]) 
        )
    }
    
    
    checkbox.addEventListener("change", ({target}) => {
        target.checked ? changeColors(whiteMode) : changeColors(initialColors)

        // ICON DENTRO DE INPUT

        let iconTheme = document.createElement('i')

        let Butoon = document.querySelector("#switch")

        Butoon.appendChild(iconTheme)

        // Trocar imagem 

        
    })
    
}
function trocarImagem() {

    let logo = document.querySelector("#logo")
    
    logo.setAttribute('src', './images/minhaLogo-removebg-preview.png');  
            // logo.toggleAttribute('src', './images/minhaLogo2-removebg-preview.png');
}

