function manipularLampada(){
    const lampada = document.querySelector(".lampada")
    
    if(!lampada.classList.contains("acesa")){
        lampada.classList.add("acesa")
        lampada.setAttribute("src", "./img/lamp_acesa.jpg")
    } else if (lampada.classList.contains("acesa")){
        lampada.classList.remove("acesa")
        lampada.setAttribute("src", "./img/lampada_apagada.jpg")
    }
}