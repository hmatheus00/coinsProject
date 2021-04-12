const URL = 'http://economia.awesomeapi.com.br/json/all/'
let conteudo = document.querySelector('#conteudo');
const documentDolar = document.querySelector('#dolar');
const documentoEuro = document.querySelector('#euro');
const documentoBtc = document.querySelector('#btc');
const conversor = document.querySelector('#conversor');

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}
const showValor = (resultado) => {
    const json = Object.entries(resultado);
    const valor = (json[0][1]['ask'].replace('.',','));
    return `${json[0][0]}1,00 vale R$${valor}`;
}
documentDolar.addEventListener("click", (e) => {
    e.preventDefault();

    fetch(`${URL}USD-BRL`, options)
    .then(res => {
        res.json()
            .then(data => {
                conteudo.innerHTML = showValor(data);
            })
    }).catch(e => console.log(e));
})

documentoEuro.addEventListener("click", (e) => {
    e.preventDefault();

    fetch(`${URL}EUR-BRL`, options)
    .then(res => {
        res.json()
            .then(data => {
                conteudo.innerHTML = showValor(data);
            })
    }).catch(e => console.log(e));
})

documentoBtc.addEventListener("click", (e) => {
    e.preventDefault();

    fetch(`${URL}BTC-BRL`, options)
        .then(res => {
            res.json()
                .then(data => {
                    conteudo.innerHTML = showValor(data);
                })
        }).catch(e => console.log(e));
})

// conversor.addEventListener('click', (e) => {

//     const quadro =
    


// })
