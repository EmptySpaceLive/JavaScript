// RECURSIVIDADE (IMPORTANTE!!!)
function fatorial(n){ 
    if (n == 1) { // (teste se for true retorne 1)
        return 1  // esse 1 é o ponto final do loop
        
    } else { 
        return n * fatorial(n-1) //função chama ela mesma -1 =
    }           // 5 - 1 = n vale 4 entao: 5 * 4 e volta no loop
// 5*4=20 loop, 20*3=60 loop, 60*2=120 loop, 120*1=120 return 1 = false,para loop.
    
}
console.log(fatorial(5))
// o fatorial de um numero:
// 5! = 5 x 4 x 3 x 2 x 1 = 120



/*
function Fatorial(n){ // função para calcular fatorial
    let far = 1
    for (let c = n; c > 1; c--) {
        far *= c              
    }
    return far
}

console.log(Fatorial(5)) // função com o parametro





let vi = function (n){ //declarar uma variavel com uma  
    return n * 2       //função que retorna um valor

}
console.log(vi(5))   //variavel com o parametro


function soma(n1=0, n2=2){ //em caso de 2 parametros pode
    return n1 + n2         //declarar o valor antecipado
}                          //que sera substituido depois
console.log(soma(3, 3))   //chamar a funcion com 2 parametros




function parimpar (c){ // "n" = parametro que vai representado
    if (c % 2 == 0) {  // parametro sendo usado como placeholder
        return 'Par!'  // return é o resultado da função

    } else {
        return 'Impar!'        
    }
}
let res = parimpar(26) // chamar a função com o parametro 
console.log(res)
*/