let pre = 35 /* coloque aqui o valor do produto*/
function pay (p) {
    if(p - pre == 0) {
        return ' pagamento efetuado'
    } else if (p - pre < 0 ) {
         return 'saldo insuficiente'
    }else {
        return `pagamento efetuado seu troco é ${p-pre}`
    }

    }
      let pagamento = pay(30)/*coloque aqui o valor pago*/
      console.log(pagamento)