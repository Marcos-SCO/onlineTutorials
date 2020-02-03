let slide = document.getElementById('slide');
window.onclick = () => {
    if (slide.style.flexGrow == 1){
        slide.style.flexGrow = 2;
    } else {
        slide.style.flexGrow = 1;
    }
}