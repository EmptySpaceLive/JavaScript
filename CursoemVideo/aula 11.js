let amigo = {nome: 'Jose', // objeto com numero, string e function 
sexo: 'M',                 // indice com nomes e nao numeros
peso: 85.5,                // 0 = indice /  nome = indentificador literal
engordar(p=0){
    console.log('Engordou!')
    this.peso += p               //metodo 'this' para usa o peso do proprio objeto
}}

console.log(`O ${amigo.nome} pesa ${amigo.peso}kg`)

amigo.engordar(2)
console.log(amigo.peso)
