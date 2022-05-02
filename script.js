//início da função com os parâmetros exigidos

function maratonaKenzie(firstPlace, secondPlace, lastPlace) {
    let array = [firstPlace, secondPlace, lastPlace]

    //estruturas condicionais para verificar em qual posição está o competidor 

    //verificação de lastPlace

    if (array[2] === 'Daniel') {
        array.splice(1, 0, array.splice(2, 1)[0]);

        //verificação de secondPlace

    }
    if (array[1] === 'Daniel') {
        array.splice(0, 0, array.splice(1, 1)[0]);
    }

    //neste momento ele ja esta em primeiro, então o valor será impresso no console

    console.log(array)
    return array;
}

//chamando a função com o daniel começando em ultimo

//mesmo a posição dele sendo trocada nos parâmetros da função sendo chamada ele seria trocado de posição pelas condicionais

maratonaKenzie('Marco', 'Bruno', 'Daniel');
console.log("Neste momento da corrida Daniel esta em primeiro por causa de seu bonus de competidor!")