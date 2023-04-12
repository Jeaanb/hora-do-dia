function carregar() {
    const msg = document.getElementById('msg')
    const msgg= document.querySelector('div#msgg')
    const img = document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    msgg.innerHTML = `Bom Dia!`
    if (hora >=0 && hora <12) {
        //bom dia
        img.src = '../modelo/img/fotomanha.png'
        msgg.innerHTML = 'Bom Dia!'
        document.body.style.background ='#e2cd9f'
    } else if (hora >=12 && hora <18) {
        //boa tarde
        img.src = '../modelo/img/fototarde.png'
        msgg.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#b9846f'
    }else {
        // boa noite
        img.src = '../modelo/img/fotonoite.png'
        msgg.innerHTML = 'Boa Noite!'
        document.body.style.background = '#515154'
    }
}