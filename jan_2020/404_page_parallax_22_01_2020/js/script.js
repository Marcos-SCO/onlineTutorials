// Helper 

function qSelect(item) {
    return document.querySelector(item);
}
function qSelectAll(item) {
    return document.querySelectorAll(item);
}

let container = qSelect('#container');
window.onmousemove = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionY = y + 'px';
}

// window.addEventListener('mousemove', (e) => {x = e.clientX; y = e.clientY; container.style.backgroundPositionX = x + 'px'; container.style.backgroundPositionY = y + 'px';});