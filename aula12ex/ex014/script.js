function carregar() {
    //Objetos
    var msg = window.document.getElementById('msg') 
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML= `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //BOM DIA! 
        img.src = "imagens/manha.png"
        document.body.style.background = '#EBF18B'
        
    }else if (hora >= 12 && hora <18){
        //Boa Tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#E9A36D'

    }else{
        //Boa noite!!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#152840'
    }

}
