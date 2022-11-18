/*var idade = 70
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Nao vota.')
} else if (idade < 18 || idade > 65){
    console.log('Voto Opcional.')
} else {
    console.log('Voto Obrigatorio.')
}*/

/*var agora = new Date() // pegando dados reais da maquina referente a tempo/data
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if ( hora <= 1 && hora <= 4) {
    console.log('Boa Madrugada!')
} else if ( hora <= 12){
    console.log('Bom dia!')
} else if ( hora < 18){
    console.log('Boa tarde!')
} else {
    console.log("Boa noite!")
}*/

var agora = new Date()
var diaSem = agora.getDay() // pegar o dia da semana em forma crua (Numeros)

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/
//diaSem = 6
switch(diaSem) {
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda")
        break   
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
        console.log("Sabado")
        break
    default :
    console.log("[ERRO] Dia invalido!")
    break
}