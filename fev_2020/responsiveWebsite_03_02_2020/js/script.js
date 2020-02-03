// Helper 

function qSelect(item) {
    return document.querySelector(item);
}
function qSelectAll(item) {
    return document.querySelectorAll(item);
}

let toggle = qSelect('.toggle');
qSelect('#linkMenu li a').addEventListener('click', toggleF);

toggle.addEventListener('click', toggleF);
function toggleF() {
    let header = qSelect('#header');
    header.classList.toggle('active');
}