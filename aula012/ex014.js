var agora = new Date()
var diaSem = agora.getDay()

//Estrutura Switch é muito útil para testar valores fixos... Só funciona com números inteiros e strings.

//Teste em intervalos é recomendado usar 'if, else if e if'
switch(diaSem) {
    case 0:
        console.log('Domingo')
        break //comando obrigatório pra finalizar o teste e mostrar apenas o valor deste caso.
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}