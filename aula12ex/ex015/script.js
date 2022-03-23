function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    //verifica se a idade da pessoa não é maior do que o ano atual (se você é um viajante do tempo sorry)
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        //Caso a opção *sexo masculino* seja a escolhida
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade>=0 && idade <10) {
                //criança
                img.setAttribute('src','imagens/menino.png')
            }else if (idade < 21){
                //Jovi 
                img.setAttribute('src','imagens/rapaz.png')
            }else if (idade < 60){
                //Adulto
                img.setAttribute('src','imagens/homem.png')
            }else{
                //Idoso
                img.setAttribute('src','imagens/idoso.png')
            }
            //Caso a opção *sexo feminino* seja a escolhida
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade>=0 && idade <10) {
                //criança
                img.setAttribute('src','imagens/menina.png')
            }else if (idade < 21){
                //Jovi
                img.setAttribute('src','imagens/moca.png')
            }else if (idade < 60){
                //Adulta
                img.setAttribute('src','imagens/mulher.png')
            }else{
                //Idosa
                img.setAttribute('src','imagens/idosa.png')
            }
        }else if (fsex[2].checked){
            gênero = 'Yivo'
            img.setAttribute('src','imagens/yivo.png')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

        
    }
}