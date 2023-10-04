function gerar(){
    let min = 1
    let max = 100
    let dif = max-min
    let aleatorio = Math.random() //essa função gera um valor real entre 0 e 1
    let num = min+Math.trunc(dif*aleatorio)

    let res = document.querySelector('section#result')
    res.innerHTML = `<p> Acabei de pensar no número ${num}.`
}

function limpar(){
    let res = document.querySelector('section#result')
    res.innerHTML = null //vai esvaziar a section
}