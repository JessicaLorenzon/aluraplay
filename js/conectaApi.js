async function listaVideos() {
    const conexao = await fetch('http://localhost:3000/videos');// sem declarar nada, considera method get
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch('http://localhost:3000/videos', {
        method: "POST", // usando o method post, enviar dados pra api
        headers: {
            "Content-type": "application/json" // informando qual tipo de arquivo e informação irá enviar
        },
        body: JSON.stringify({ // colocando quais informações serão enviadas e o stringfy coloca tudo que estamos enviando como string
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo.");
    }

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}