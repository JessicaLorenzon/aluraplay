import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario]');

async function criarVideo(evento) {
    evento.preventDefault();
    // o evento submit tem como padrão dar reload na pagina após enviar informação, colocamos preventDefault() para tirar o reload da pagina após o envio

    const imagem = document.querySelector('[data-imagem]').value;
    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = Math.floor(Math.random() * 10).toString();

    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem);

        // redirecionando o usuário para outra página após ter enviado os dados com sucesso
        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener('submit', evento => criarVideo(evento));