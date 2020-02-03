// Helper 

function qSelect(item) {
    return document.querySelector(item);
}
function qSelectAll(item) {
    return document.querySelectorAll(item);
}

qSelect('.toggle').addEventListener('click', toggle);
function toggle() {
    let curtain = qSelect('#curtain');
    curtain.classList.toggle('active');
}