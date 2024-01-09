const form = document.getElementById('form');
const fullName = document.getElementById('full-name');
const number = document.getElementById('telefone');
const value = document.getElementById('valor');
const installments = document.getElementById('parcelas');
const id = document.getElementById('id');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

let nameValid = false;
let numberValid = false;
let valueValid = false;
let installmentsValid = false;
let idValid = false;
let testeValid = false;

function numberValidation(numero){
    return numero.length >= 11;
}

function nameValidation(nomeCompleto){
    const nomeComoArrey = nomeCompleto.split(' ');
    return nomeComoArrey.length >= 2;
}

function valueValidation(valor){
    return valor >= 100;
}

function installmentsValidation(parcelas){
    return parcelas > 0;
}

function idValidation(id){
    return id.length == 10;
}

function teste(campoA, campoB){
    return campoA > campoB;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    nameValid = nameValidation(fullName.value);
    numberValid = numberValidation(number.value);
    valueValid = valueValidation(value.value);
    installmentsValid = installmentsValidation(installments.value);
    idValid = idValidation(id.value);
    testeValid = teste(campoA.value, campoB.value);
    if(nameValid && numberValid && valueValid && installmentsValid && idValid && testeValid){
        document.querySelector('#success-message').style.display = 'flex';
        fullName.value = '';
        number.value = '';
        value.value = '';
        installments.value = '';
        id.value = '';
        fullName.style.border = '';
        number.style.border = '';
        value.style.border = '';
        installments.style.border = '';
        id.style.border = '';
        campoA.style.border = '';
        campoB.style.border = '';
        document.querySelector('#error-message').style.display = 'none';
    }if(!nameValid){
        fullName.style.border = '1px solid red';
        document.querySelector('#error-message').style.display = 'flex';
    }if(!numberValid){
        number.style.border = '1px solid red';
        document.querySelector('#error-message').style.display = 'flex';
    }if(!valueValid){
        value.style.border = '1px solid red';
        document.querySelector('#error-message').style.display = 'flex';
    }if(!installmentsValid){
        installments.style.border = '1px solid red';
        document.querySelector('#error-message').style.display = 'flex';
    }if(!idValid){
        id.style.border = '1px solid red';
        document.querySelector('#error-message').style.display = 'flex';
    }
})