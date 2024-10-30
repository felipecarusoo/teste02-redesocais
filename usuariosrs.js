const url = 'https://raw.githubusercontent.com/teuzsw/graficos-alura/refs/heads/main/dados-globais.json'

async function visualizarInformacoes() {
    const resp = await fetch(url)
    const dados = resp.json()
    console.log(dados)
    
}

visualizarInformacoes()
