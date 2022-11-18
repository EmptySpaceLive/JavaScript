/*
const sum1 = function sum(number1, number2){   // function expression pode ter nome
    return number1 + number2
}                                            //const sumex = (criando uma variavel para receber a function)

const sum2 = (number1, number2) => { //const sum = (criando uma variavel para receber a arrow function)
    return number1 + number2        // ( ) => {} sintaxe da arrow function
}                                   // sempre anonima 
                                 
const sum3 = (number1, number2) => number1 + number2; // ( ) =>  sintaxe com retorno sem o '{ }' e sem 'return'


const community = ( ) => 'CollabCode'//Sem parametro e com retorno


const double = number1 => number1 * 2; //apenas 1 parametro funciona sem o '( )'


const idade = (year) => {  // '{}' sao necessarios em caso de if,for,while etc
    if (year >= 18) {
        return 'Maior idade'
    }
    return 'Menor idade'
}

const getPerson = () => ({name:'Lucas', eyes: 'Azul'}); //retornar um JSON sem return com '()' no lugar de '{}'

(() => { // estrutura de uma IIFE usando arrow function
const getPerson = () => ({name:'Lucas', eyes: 'Azul'}); 

console.log(getPerson())
})()
*/

(() => { //usando this. com arrow function sem precisar fazer gabiarra
    function Person() {
        const that = this; // usar assim quando fora de arrow function
        this.year = 0

        setInterval(() => { // sem arrow function o this nao funcionaria
            this.year = this.year + 1
            console.log('qual this ?', this)
            console.log('qual é a idade', this.year)
        }, 1000);
    }
    console.log(Person()) 
})() 

