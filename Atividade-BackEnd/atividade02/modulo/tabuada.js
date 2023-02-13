/*******************************************************************
  Objetivo: funções do sistema de tabuada
 * Data: 13/02/2023
 * Autor: Bianca Ferreira Duarte
 * Versão: 1.0 
 * ***************************************************************/
const tabuada = function(multiplicandoMin, multiplicandoMax,
    multiplicadorMin,
    multiplicadorMax
)

{
    let minMultiplicando = multiplicandoMin
    let maxMultiplicando = multiplicandoMax
    let minMultiplicador = multiplicadorMin
    let maxMultiplicador = multiplicadorMax
    let contador

    while (minMultiplicando <= maxMultiplicando) {
        console.log(`\n${minMultiplicando}\n`)
        contador = minMultiplicador

        while (contador <= maxMultiplicador) {
            let resultado = minMultiplicando * contador
            console.log(`${minMultiplicando} x ${contador} = ${resultado}`)

            contador++
        }
        minMultiplicando++
    }
}


module.exports = {
    tabuada
}