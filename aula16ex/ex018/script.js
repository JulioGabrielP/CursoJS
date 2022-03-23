var list = []

function adicionar(){
    let valorCitado = document.getElementById('inpNumber')
    let espaço = document.getElementById('area')
    let area = window.document.getElementById('Finalização')
    

    if (valorCitado.value.length == 0) { //Verifica se algo foi digitado no campo
        window.alert('[ERROR] Por favor digite um número')
        valorCitado.focus()
    }else{var n = Number(valorCitado.value)}
    
    if (n<1||n>100) { //Verifica se o número está no range
        window.alert('Número fora das especificações')
        valorCitado.value = ''
        valorCitado.focus()
   
    }else if(list.indexOf(n)!= -1){ // Aqui verifica se o valor digitado já está no array
        window.alert(`${n} já está na lista`)
        valorCitado.value = ''
        valorCitado.focus()
    }else if(n == undefined){
        valorCitado.value = ''
    }else{ //Adiciona o número digitado no array e cria uma option no HTML
        list.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        espaço.appendChild(item)
        area.innerHTML = ''
        valorCitado.value = ''
        valorCitado.focus()
    }
}
function finalizar(){
    let area = window.document.querySelector('#Finalização')
    function somar(){
        let soma = 0
       for(let i in list){
           soma+= list[i]
       }
       return soma
    }

    if (list.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    }else{
    area.innerHTML = 
    `<p>Ao todo temos ${list.length} números cadastrados</p>
     <p>O menor número é ${Math.min(...list)}</p>
     <p>O maior número é ${Math.max(...list)}</p>
     <p>A soma dos números é ${somar()}</p>
     <p>A média dos números é ${somar()/list.length}</p>`
    //Se você somar o .length de uma array dá a média
     
    }
}