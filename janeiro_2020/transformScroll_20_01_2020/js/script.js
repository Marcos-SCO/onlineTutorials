// Helper 

function qSelect(item) {
    return document.querySelector(item);
}
function qSelectAll(item) {
    return document.querySelectorAll(item);
}

let skewed = qSelect('.skewed');

window.addEventListener('scroll', () => {
    let value = -10 + window.scrollY/60;
    skewed.style.transform = "skewY("+ value + "deg)";
});