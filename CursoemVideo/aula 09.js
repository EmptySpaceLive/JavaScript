
let valores = [8,1,7,4,2,9,11]
valores.sort(function(a,b){ //metodo sort para colocar em ordem crescente
    return a-b})             //numeros.
let pos = valores.indexOf(9) //metodo para achar o indice do valor
if (pos == -1) {   // caso o valor não exista o indice sera -1
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor esta na posição ${pos}`)
    console.log(valores)
}











/*let valores = [8,1,7,4,2,9]

for (let pos = 0; pos < valores.length; pos++) { 
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`); //metodo padrao 
    
}
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);//metodo simplificado
}


/*var num = [4,8,2,9,3]
num.push(1)   //cria e adiciona o valor ao final 
num.sort()   // organiza em ordem crescente os valores
console.log(`Nosso vetor é: ${num}`) // mostra os valores
console.log(`O vetor tem ${num.length} posições.`) // mostra quantos valores estao dentro
console.log(`O primeiro valor do vetor é ${num[0]}`) // como selecional o valor pelo indice*/


 