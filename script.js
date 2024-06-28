const password= document.getElementById('password');
const icone= document.getElementById('icone');

function showHide(){
    if(password.type ==='password'){
        password.setAttribute('type','text');
        icone.classList.add('hide')
    }
    else{
        password.setAttribute('type', 'password');
        icone.classList.remove('hide')
    }


}