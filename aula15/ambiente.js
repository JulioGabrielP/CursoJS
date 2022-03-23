let num = [4,1,2,3,5,8]
console.log(num)
console.log(`O array tem ${num.length} posições`)
num.sort()
console.log(`Ele em ordem fica assim ${num}`)
num.push(3)
console.log(`O primeiro valor é ${num[0]}`)
let pos = num.indexOf(3)
console.log(`O valor 3 foi parar na posição ${pos} (lembrando que começa a contar do 0)`)