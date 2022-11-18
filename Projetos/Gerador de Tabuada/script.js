function calcular(){
    var num_in = document.getElementById('num_in')
    if (num_in.value.length == 0) {
        alert('[ERRO] insira um numero!')
    } else {
        var tabu = document.getElementById('tabu_out')
        var num = Number(num_in.value)
    
        for (let c = 1;c <= 10 ; c ++ ) {
            //let opt = document.createElement('option') cria option dinamicamente
            //tabu.appendChild(opt) colocando o option dentro e abaixo 
            //opt.text = 'texto' colocando text dinamicamente no elemento criado
            let res = num * c //pode colocar direto dentro do template como num*c
            tabu.options[c].innerText = `${num} x ${c} = ${res} `               
                        
        }
    }
}