function contar(){
    //Variáveis
    var nBegin = window.document.getElementById("nInicio")
    var nEnd = window.document.getElementById('nFim')
    var nWay = window.document.getElementById('nPasso')
    var count = window.document.getElementById('contagem')
    //Validações
    //Caso algum esteja vazio
    if (nBegin.value.length == 0 || nEnd.value.length == 0 || nWay.value.length == 0){
        //window.alert('[ERROR] Faltam dados')
        count.innerHTML = "Impossível Contar!"  
    }else{
        count.innerHTML = 'Contando: <br> '
        var b = Number(nBegin.value)
        var e = Number(nEnd.value)
        var w = Number(nWay.value)
         }
         if (w<=0) {
             window.alert('Passo inválido! Considerando Passo 1')
             w = 1
         }
        if (b < e){
             //Contagem Crescente
            for(var c = b; c <= e; c += w)
                count.innerHTML += `${c} \u{1F595}`
        }            
            else{
                
                //Contagem Regressiva
                for(var c = b; c >= e; c-= w)
                    count.innerHTML += `${c} \u{1F595}`
            }
            
        
            count.innerHTML += `\u{1F4A9}`
        
    
        }
