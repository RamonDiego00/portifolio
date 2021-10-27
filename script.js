function toggle(altera) {

    
        let skills = document.querySelector(`.${altera}`);
        skills.classList.toggle("desativado");
        // skills.classList.remove("desativado");
        
    }
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
