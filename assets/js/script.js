/*
CaseSentisitive= da erro se nao usar camel
por Tag: getElementByTagName()
por Id: getElementById()
nome: byName
classe: getElementByClassName
seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email') /*se o email fosse classe usava .email, ou input.email, ou input#email*/ 
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')

let nomeOK = false
let emailOk= false
let assuntoOk = false 

nome.style.width= '100%'
email.style.width= '100%'

function validaNome(){
   let txtNome = document.querySelector('#txtNome')

    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
        nomeOk = false
    }
    else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOK = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
        emailOk = false
    }else {
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }


}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Seu texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assuntoOk = false
    } else{
        txtAssunto.style.display = 'none'
        assuntoOk = true;
    }
}

function enviar(){
    if(nomeOK == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }else{
        alert('preencha as informações corretamente antes de enviar...')
    }
}   

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.heigth = '600px'

}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.heigth = '250px'

}
