// Helper 

function qSelect(item) {
    return document.querySelector(item);
}
function qSelectAll(item) {
    return document.querySelectorAll(item);
}

qSelect('#form').addEventListener('keyup', validation);
function validation() {
    let form = qSelect('#form');
    let email = qSelect('#email').value;
    let text = qSelect('#text');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    if (email.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = 'Seu E-mail é válido.';
        text.style.color = '#00ff00';
    } else {
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = 'Seu E-mail é inválido.';
        text.style.color = '#f00';
    }

    if (email == '') {
        form.classList.remove('invalid');
        form.classList.remove('valid');
        text.innerHTML = '';
        text.style.color = '';
    }

}
