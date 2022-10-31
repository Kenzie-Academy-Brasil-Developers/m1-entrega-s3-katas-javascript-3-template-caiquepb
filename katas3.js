//exercício 1

console.log(" -------------------- Resultado exercício 1 -------------------- ")

function xRunning(array){

    for(let i = array.indexOf("x"); i < array.length; i++){
        array.splice(i, 1, "x")
        console.log(array)
        array.splice(i, 1, "-")
    }

}

xRunning(["x", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"])

//exercicio 2

console.log(" -------------------- Resultado exercício 2 -------------------- ")

function vowelsCounter(array){

    let vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    let cont = 0

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            if(vogais.includes(array[i][j])){
                cont++
            }
        }
        console.log(cont)
        cont = 0
    }

}

vowelsCounter(["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"])

//exercicio 3

console.log(" -------------------- Resultado exercício 3 -------------------- ")

function stringTripletGroup(string){

    let array = []

    for(let i = 0; i < string.length; i+=3){
        if(string.length - i == 2){
            array.push(string[i]+string[i+1]+" ")
        }else if(string.length - i == 1){
            array.push(string[i]+" "+" ")
        }else{array.push(string[i]+string[i+1]+string[i+2])}
    }

    return array
}

console.log(stringTripletGroup("Os três mosqueteiros"))

//exercicio 4

console.log(" -------------------- Resultado exercício 4 -------------------- ")

function dominantPet(array){

    let cachorro = 0
    let gato = 0

    for(let i = 0; i < array.length; i++){
        if(array[i].toLowerCase() == "cat"){
            gato++
        }else if(array[i].toLowerCase() == "dog"){
            cachorro++
        }else{alert("Tem uma palavra inválida")}
    }

    if(gato > cachorro){
        return "CAT!"
    }else if(gato < cachorro){
        return "DOG!"
    }else{return "DRAW!"}

}

console.log(dominantPet(["DoG", "cat", "cAT", "dOg", "cat", "Dog", "caT"]))
console.log(dominantPet(["dog", "cAt", "Cat", "doG", "CAT", "Dog", "caT", "DOG"]))
console.log(dominantPet(["dog", "cAt", "Cat", "doG", "CAT", "Dog", "DOG"]))

//exercicio 5

console.log(" -------------------- Resultado exercício 5 -------------------- ")

function divisibleList(lista, numero){

    let array = []

    for(let i = 0; i < lista.length; i++){
        if(lista[i] % numero == 0){
            array.push(lista[i])
        }
    }

    return array

}

console.log(divisibleList([14, 25, 32, 50, 35, 30], 5))

//exercicio 6

console.log(" -------------------- Resultado exercício 6 -------------------- ")

function trustMeOrNot(bool, numero){

    let array = []
    
    for(let i = 0; i < numero; i++){
        array.push(bool)
    }

    return array

}

console.log(trustMeOrNot(true, 8))

//exercicio 7

console.log(" -------------------- Resultado exercício 7 -------------------- ")

function changeLampStatus(lista){

    let array = []

    for(let i = 0; i < lista.length; i++){
        array.push(!lista[i])
    }

    return array

}

console.log(changeLampStatus([false, false, true, false, true, true, true]))

//exercicio 8

console.log(" -------------------- Resultado exercício 8 -------------------- ")

function gradeAverage(lista){

    let cont = 0
    let media = 0

    for(let i = 0; i < lista.length; i++){
        cont += lista[i]
    }

    media = (cont/lista.length).toFixed(2)

    return `A média das notas é: ${media}`

}

console.log(gradeAverage([6.0, 5.5, 6.7, 8.0, 10, 10, 7.1]))

//exercicio 9

console.log(" -------------------- Resultado exercício 9 -------------------- ")

function canvasDeliveriesPercentage(lista){

    let cont = 0
    let media = 0

    for(let i = 0; i < lista.length; i++){
        cont += lista[i]
    }

    media = ((cont/lista.length)*10).toFixed(2)

    return `A porcentagem total de entregas atingida é: ${media}%`

}

console.log(canvasDeliveriesPercentage([3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7]))

//exercicio 10

console.log(" -------------------- Resultado exercício 10 -------------------- ")

function shouldIGo(lista){

    let array = []

    for(let i = 0; i < lista.length; i++){
        if(lista[i] == "r" || lista[i] == "R"){
            array.push("Stop!")
        }else if(lista[i] == "y" || lista[i] == "Y"){
            array.push("Attention!")
        }else if(lista[i] == "g" || lista[i] == "G"){
            array.push("Go!")
        }else{"Tem uma palavra inválida"}
    }

    return array

}

console.log(shouldIGo(["R", "r", "G", "y", "G", "Y", "g"]))