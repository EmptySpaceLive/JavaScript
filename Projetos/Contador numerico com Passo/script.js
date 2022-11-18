function contar(){

    var res = document.querySelector('div#res')
    res.innerHTML = '<p> Contando:</p>'
    var txt_ini = document.querySelector('input#txt_ini')
    var txt_fim = document.querySelector('input#txt_fim')
    if (txt_ini.value.length == 0 ||txt_fim.value.length == 0) {
        alert('[ERRO] Verifique os dados inseridos.')
    }
    var txt_num = document.querySelector('input#txt_num')
    var num = Number(txt_num.value)
    if (txt_num.value.length == 0|| txt_num.value == 0) {
        alert('[ERRO] Passo não encontrado, considerando passo 1!')
        num += 1        
    }
    var ini = Number(txt_ini.value)
    var fim = Number(txt_fim.value)
    
    if (ini > fim) {
        while (ini >= fim){
            res.innerHTML += ` ${ini} &#10145`
            ini -= num 
        }  
        
    }
    
    while (ini <= fim) {
    res.innerHTML += ` ${ini} &#10145`
    ini += num        
    } 
           
    res.innerHTML += '&#10004'
} 