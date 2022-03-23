let valores = [0,7,4,2,5]
console.log(valores)
/*
for (let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
*/
for(let pos in valores){
    console.log(`A posição ${pos} tem valor de ${valores[pos]}`)
}