function  carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12) {
        // BOM DIA!
        img.src = 'fotomanhã.webp'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'fototarde.webp'
        document.body.style.background = '#f58052ff'
    } else {
        // BOA NOITE !
        img.src = 'fotonoite.webp'
        document.body.style.background = '#4e4e57ff'
    }
}
