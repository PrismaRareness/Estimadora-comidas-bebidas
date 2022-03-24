let inputAdultos = document.getElementById("adultos")
let inputCrianças = document.getElementById("crianças")
let inputDuração = document.getElementById("duração")

let resultado = document.getElementById("resultado")

function calcular(){

    let adultos = inputAdultos.value
    let crianças = inputCrianças.value
    let duracao = inputDuração.value


    let salgadinho = salgadinho_por_pessoa(duracao) * adultos + (salgadinho_por_pessoa(duracao)/2 * crianças)
    let cerveja = cerveja_por_pessoa(duracao) * adultos
    let bebidas = bebida_por_pessoa(duracao) * adultos + (bebida_por_pessoa(duracao)/2 * crianças)
    

    resultado.innerHTML = `<p>${salgadinho} mg de salgadinhos </p>` 
    resultado.innerHTML += `<p>${Math.ceil(cerveja / 355)} latas de cerveja </p>` 
    resultado.innerHTML += `<p>${Math.ceil(bebidas / 2000)} garrafas de refrigerante (2 litros)</p>` 

}
function salgadinho_por_pessoa(duracao){

    if (duracao >= 6){
    return 650
    }
    else{
    return 400
    }

}
function cerveja_por_pessoa(duracao){

    if (duracao >= 6){
    return 2000
    }
    else{
    return 1065
    }

}
function bebida_por_pessoa(duracao){

    if (duracao >= 6){
    return 1500
    }
    else{
    return 1000
    }

}