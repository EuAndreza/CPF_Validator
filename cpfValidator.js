//CPF FICTICIO
var cpf = "000-000-000-00"
console.log(cpf.length)

function cpf_(numero){
    let storeNumber = []
    let splitNumber = numero.split("")

    splitNumber.forEach(number =>{
        if(Number(number) >= 0){
            storeNumber.push(Number(number))
        }
    })

    let valueSum = 10
    let sum = valueSum

    let storeTemp = []
    let result = 0

    for(let position = 2; position >= 1; position --){
        for(let counter = 0; counter < (storeNumber.length - position);counter ++){
            let sumResult = storeNumber[counter] * sum
            storeTemp.push(sumResult)
            sum = sum - 1
        }
        positionCalc = storeTemp.reduce((position, numero) => ((position + numero)%storeNumber.length), 0);
        positionCalc =(storeNumber.length - positionCalc)
        if(positionCalc == storeNumber[storeNumber.length - position]){
            console.log(positionCalc,storeNumber[storeNumber.length - position])
            result = result + 1
        }
        storeTemp = []
        sum = valueSum + 1
    }
    //console.log(storeTemp)
    return storeTemp
}



let teste1 = cpf_(cpf)
console.log(teste1)


// function split_Value(splitValue){
    
//     var store = []
//     var splitValue = cpf.split("")

//     splitValue.forEach(number => {
//         if(Number(number) >= 0){
//             store.push(Number(number))
//         }
//     });
//     return store
// }
// var teste = split_Value(cpf)
// console.log(teste.length)
// function calculation(valueCPF, valueSum=10){
//     let store = []
//     let result = 0
//     let sum = valueSum

//     for(let position = 2; position >= 1; position --){
//         //for(let counter = 0; counter < 9;counter ++){
//         for(let counter = 0; counter < (valueCPF.length - position);counter ++){
//             sumResult = valueCPF[counter] * sum
//             store.push(sumResult)
//             sum = sum - 1
//         }
//         // console.log('posição')
//         // console.log(sumResult)

//         positionCalc = store.reduce((position, numero) => ((position + numero)%valueCPF.length), 0);
//         positionCalc =(valueCPF.length - positionCalc)
//         if(positionCalc == valueCPF[valueCPF.length - position]){
//             console.log(positionCalc,valueCPF[valueCPF.length - position])
//             result = result + 1
//         }
//         store = []
//         sum = valueSum + 1
//     }
//     if(result == 2){
//         return true
//     }else{
//         return false
//     }
//     //return result
// }
// console.log(calculation(teste))

console.log("cpf: " +cpf)
