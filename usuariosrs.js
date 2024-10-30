const url = 'https://raw.githubusercontent.com/teuzsw/graficos-alura/refs/heads/main/dados-globais.json'

async function visualizarInformacoes() {
    const resp = await fetch(url)
    const dados = await resp.json()
    console.log(dados);
    
    const paragrafo = document.createElement('p')

    paragrafo.innerHTML = `Você sabia que existem <span>${dados.Facebook}</span> usuários ativos no facebook?`
    console.log(paragrafo)

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)

    
}

visualizarInformacoes()
