

function toggle() {
    let elementToToggle = document.getElementsByClassName("menu")[0];
    elementToToggle.classList.toggle("hidden");

    let img1 = "img/menu_burger/square.svg",
        img2 = "img/menu_burger/exitico.svg";
            
    let imgElement = document.getElementsByClassName('hambico')[0];
    imgElement.src = (imgElement.attributes.src.value === img1)? img2 : img1;	
}