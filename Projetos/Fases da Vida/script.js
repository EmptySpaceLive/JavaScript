function calcular(){
    var res = document.querySelector('div#res')
    var data = new Date()
    var ano = data.getFullYear()
    var nasc_ano = document.getElementById('nasc_ano')
    if (nasc_ano.value.length == 0 || Number(nasc_ano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')        
    } else {
        var idade = ano - Number(nasc_ano.value)
        var fsex = document.getElementsByName('radsex')
        var genero = '' //criar uma variavel vazia
        var img = document.createElement('img') // criar um elemento img, ja dentro de var
        img.setAttribute('id','foto') //colocando id em elemento dentro da variavel
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0&& idade <=4) {
                //bebe  
                img.setAttribute('src',`${genero}/bebe.png`)              
            }else if (idade <= 14) {
                //criança
                img.setAttribute('src',`${genero}/criança.png`)
            }else if (idade <= 21) {
                //jovem
                img.setAttribute('src',`${genero}/jovem.png`)
            }else if (idade <= 40){
                //adulto
                img.setAttribute('src',`${genero}/adulto.png`)
            }else if(idade <= 70) {
                //meia idade
                img.setAttribute('src',`${genero}/meiaidade.png`)
            }else {
                //velho
                img.setAttribute('src',`${genero}/idoso.png`)
            }
            
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0&& idade <=4) {
                //bebe  
                img.setAttribute('src',`${genero}/bebe.png`)              
            }else if (idade <= 14) {
                //criança
                img.setAttribute('src',`${genero}/criança.png`)
            }else if (idade <= 21) {
                //jovem
                img.setAttribute('src',`${genero}/jovem.png`)
            }else if (idade <= 40){
                //adulto
                img.setAttribute('src',`${genero}/adulto.png`)
            }else if(idade <= 70) {
                //meia idade
                img.setAttribute('src',`${genero}/meiaidade.png`)
            }else {
                //velho
                img.setAttribute('src',`${genero}/idoso.png`)
            }
            

        }
        res.style.textAlign = 'center' // centralizar texto no proprio javascript
        res.innerHTML = `Você é ${genero} com ${Number(idade)} anos de idade.`
        res.appendChild(img) //colocar uma var como filha, abaixo de outra
    }
    

     

    
    
}
    