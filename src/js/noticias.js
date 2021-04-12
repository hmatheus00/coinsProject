const API_KEY  = 'c791c8d5490d4922a1bc676827b787ba';

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

function listarNoticias(noticias, tamanho){
    const conteudo = document.querySelector('#container-conteudo');
    let lista = '';
    for(let i = 0; i<tamanho;i++){
        lista += `<div class="noticia" >` +
                    `<a href="${noticias[i].url}" target="_blank"><h3>${noticias[i].title}</h3></a><br>` + 
                    `<span>${noticias[i].content}</span><br>` +
                `</div><br>`
    }

    conteudo.innerHTML = lista;
}

function buscarNoticias(){

    fetch(`https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${API_KEY}`, options)
        .then(response  =>{
            response.json()
                .then(data  => {
                    listarNoticias(data.articles, data.totalResults);
                })
        }).catch(e  => console.log(e));
}
buscarNoticias();