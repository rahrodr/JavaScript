function estacao(){
    let mes = prompt('Digite o mês em extenso (ex: Setembro)')
    let saida = document.querySelector('section#saida')
    let estacao 
    switch (mes.toUpperCase()) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estacao = 'VERÃO'
            break
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacao = 'OUTONO'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacao = 'INVERNO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'PRIMAVERA'
            break
        default:
            estacao = 'INDEFINIDA'
            break
    }
    saida.innerHTML = `<p>No mês de ${mes}, estamos na estação ${estacao}.`
}