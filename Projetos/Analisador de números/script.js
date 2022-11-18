var txt_num = document.querySelector('input#txt_num')
var sel_tab = document.querySelector('select#tabela')
var res = document.querySelector('div#res')
var num_vet = []


function calcular(){
    var num_in = Number(txt_num.value)
    var pos = num_vet.indexOf(num_in)
    
    
    
    if(num_in <= 0 || num_in > 100) {
    alert('[ERRO nº 1]')
    } else if (pos == -1){
        var opt = document.createElement('option')
        sel_tab.appendChild(opt)
        opt.innerHTML = `Valor ${num_in} adicionado`
        num_vet.push(num_in)
        res.innerHTML = ''
        txt_num.value = '' //Como manter o input vazio
        txt_num.focus()    //como deixar selecionado o input
        
    } else {
        alert('[ERRO nº 2]')
    }
}

function final(){
    if (num_vet.length <= 0) {
        alert('[ERRO nº 3]')        
    } else {
        var soma = 0
        for(let c in num_vet){
            soma += num_vet[c]
        }
        num_vet.sort(function(a,b){
            return a-b})

        res.innerHTML = 
        `<p>Ao todo, temos ${num_vet.length} números cadastrados.</p>
        <p>O maior número informado foi ${num_vet.slice(-1)}.</p>
        <p>O menor número informado foi ${num_vet[0]}.</p>
        <p>Somando todos os valores, temos ${soma}.</p>
        <p>A média dos valores digitados é: ${soma / num_vet.length}.</p>`

    }

}







/*
var txt_num = document.querySelector('input#txt_num') 
var tabe = document.querySelector('select#tabela')
var res = document.querySelector('div#res')
var vet_num =[]


function calcular(){
    var num_in = Number(txt_num.value) 
    let pos = vet_num.indexOf(num_in)
    if (num_in <= 0 || num_in > 100) {
        alert('[ERRO]')
        
    }
    else {
    var opt = document.createElement('option')
    tabe.appendChild(opt)
    vet_num.push(num_in)
    opt.text = `Valor ${num_in} adicionado.`
    res.innerHTML = ''   
    }
}
function final(){
    if (txt_num.value.length <= 0) {
        alert('[ERRO]')
        
    } else {
        
    var valor = 0
    for( let c in vet_num){
        valor += vet_num[c]
        
    }
    vet_num.sort(Number)

    res.innerHTML = 
   `<p>Ao todo, temos ${vet_num.length} números cadastrados.</p>
   <p>O maior número informado foi ${vet_num.slice(-1)}.</p>
   <p>O menor número informado foi ${vet_num[0]}.</p>
   <p>Somando todos os valores, temos ${valor}.</p>
   <p>A média dos valores digitados é: ${valor / vet_num.length}.</p>`
    }

   

}*/
