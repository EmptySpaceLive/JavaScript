var menornum = 60   // menor numero
var maiornum = 1   // maior numero
var quantnum = 6   // quantidade de numeros
let num = []

function getRandom(min=1,max=60){ // function para gerar numero aleatorio
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}


for (let c = 0; c < quantnum; c++) { // function para testar e adicional numeros ao vetor
  randnum = getRandom(menornum,maiornum)
  
  if (num.indexOf(randnum)== -1 ) {
    num.push(randnum)
    
  } else {
    //console.log('[ERRO]')
    //console.log(`volta ${c} numero ${randnum}, ${num.length} digitos`)
    c--        
  }       
}
num.sort(function(a,b){ //metodo para organizar numeros em forma crescente
    return a-b})

console.log(`Números da Sorte:${num}`)