function newButton(text, callback){
    const $body = document.querySelector('body')
    const $button = document.createElement('button')
    $button.textContent = text

    callback($button) //CALLBACK com o button como parametro 
    
    $body.insertAdjacentElement('afterbegin', $button)//adiciona o button ao body e aciona a tela
    return $button  
}

//const Login = newButton('Login') *metodo para editar o button depois da criação*
//const Logout = newButton('Logout') *sem callback*

//Login.style.cssText = ` //*exemplo*
//  font-size: 40px; `* com varios botoes e varios edit o codigo fica confuso,desorganizado*

newButton('Logout', (button) => {//callback editando o button antes dele ser criado
    button.addEventListener('click',()=>{
        alert('Logout Efetuado!')
    })
    button.style.cssText = `
        font-size: 20px;
        color: red
        `;//BUTTON nº 1 criado com a function 
    
})
 
newButton('Login', (callback) => {//callback apresentando mensagem com ao click com arrow func
    callback.addEventListener('click',()=>{
        alert('Login Efetuado!')
    })
    callback.style.cssText = `
        font-size: 20px;
        color: green;
        `;//BUTTON nº  2 criado com a function 

}) 
