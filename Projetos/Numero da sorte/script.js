var res = document.querySelector('div#res')
var txtmenor = document.querySelector('input#txtmenor')
var txtmaior = document.querySelector('input#txtmaior')
var txtquant = document.querySelector('input#txtquant')

res.innerHTML = ''
function Sortear(){
    var menornum = Number(txtmenor.value)   // menor numero
    var maiornum = Number(txtmaior.value)   // maior numero
    var quantnum = Number(txtquant.value)   // quantidade de numeros  
    var num_test = 0                      // teste para evitar erro nº2 
    var num = [] 

    if (menornum > maiornum) {
        num_test = menornum
    } else{
        num_test = maiornum
    }

    if (menornum <= 0 || maiornum <= 0) {
        alert('[ERRO nº 1, Insira entre quais números será o sorteio.]')
        res.innerHTML = ''        
    }else if(quantnum > num_test){
        alert('[ERRO nº 2, Verifique a quantidade de números.]')
        res.innerHTML = ''
    }else {
        for (let c = 0; c < quantnum; c++) { // function para testar e adicional numeros ao vetor
            randnum = getRandom(menornum,maiornum)
                    
            if (num.indexOf(randnum)== -1 ) {
                num.push(randnum)
          
            } else {                
                
                c-- 
            }       
        }
    
    num.sort(function(a,b){ //metodo para organizar numeros em forma crescente
        return a-b})

    res.innerHTML = `Os números da sorte são: <p>[${num}] &#127808</p>`    
    }
         
}

function getRandom(min=1,max=60){ // function para gerar numero aleatorio
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}