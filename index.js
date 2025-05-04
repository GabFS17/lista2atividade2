const paragrafo = document.getElementById('paragrafo')
//consegue o q foi escrito no elemento input:
const url = new URL(document.URL); 
const params = new URLSearchParams(url.search);

paragrafo.innerHTML = params.get('texto') //escreve no parágrafo