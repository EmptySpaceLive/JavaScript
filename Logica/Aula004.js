/* Condicionais usando ifelse*/

nota = 4
/* condicional simples */
if (nota >= 7){
    console.log("Aprovado!")
}

/* Condicional */
if (nota >= 7) {
    console.log("Aprovado!")
    
} else {
    console.log("Reprovado")
    
}

/* Condicional encadeada */
if (nota >=7) {
    console.log("Aprovado")
    
} else { if (nota < 3) {
    console.log("Reprovado")
    } else {
        console.log("Recuperação")
        
    }
    
}
