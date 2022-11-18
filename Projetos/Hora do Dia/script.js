
function carregar() {
    var msg = document.querySelector('div#mensagem')  
    var saudar = document.querySelector('div#sauda')
    var data = new Date()
    var Hora = data.getHours() //data.toTimeString() pegar o horario da maquina    
    var Minutos = data.getMinutes()
    
    Minutos < 10 ? Minutos = "0" + Minutos : Minutos

    msg.innerHTML = `<strong>Agora são exatamente ${Hora}:${Minutos}</strong>.`
    

    if(Hora >= 0 && Hora <= 4 ) {
        // Boa Madrugada
        arquivo.src = 'fotomadrugada.png'
        document.body.style.background = '#312f40'
        saudar.innerHTML =" Boa Madrugada "         

    } else if (Hora <= 12) {
        //Bom Dia
        arquivo.src = 'fotomanha.png'
        document.body.style.background = '#ebd4aa'
        saudar.innerHTML = "Bom Dia"

    } else if (Hora <= 18) {
        //Boa tarde
        arquivo.src = 'fototarde.png'
        document.body.style.background = '#da9b4d'
        saudar.innerHTML ='Boa Tarde'

    } else {
        //Boa Noite
        arquivo.src = 'fotonoite.png'
        document.body.style.background = '#0b6281'
        saudar.innerHTML = 'Boa Noite'

    }
}
  