function toggle(altera) {

    let skills = document.querySelector(`.${altera}`);
    skills.classList.toggle("desativado");

    // let icones = document.querySelectorAll('div')
    // for (var i = 0; i<icones.length; i++){
    //     icones[i].addEventListener('click', removerFilho);
    // }

    // function removerFilho(e) {
    //     e.preventDefault();
    //     let textos =  skills.classList.toggle("desativado");
    //     let div = this.parentNode;
    //     div.parentNode.removeChild(textos)
    // }

}