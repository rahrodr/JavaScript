function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=6 && hora <18){
        imagem.src = 'img/dia.jpg'
        document.body.style.background = '#e2cd9f'}
    else{
        imagem.src = 'img/noite.png'
        document.body.style.background = '#25398a'}
    
}