const rotas = {
    introducao: "i18next.html",
    instala: "quilljs.html",
    porque: "select2.html",
  };
  
  async function carregarPagina() {
    const hash = location.hash.replace("#", "");
    const arquivo = rotas[hash];
    const conteudo = document.getElementById("conteudo");
  
    if (arquivo) {
      try {
        const resposta = await fetch(arquivo);
        const html = await resposta.text();
        conteudo.innerHTML = html;
      } catch (erro) {
        conteudo.innerHTML = "<section><h2>Erro ao carregar a página.</h2></section>";
      }
    } else {
      conteudo.innerHTML = `
        <section>
          <h2>Bem-vindo ao Slide de Apresentação!</h2>
          <p>Use o menu acima para navegar pelas Bibliotecas.</p>
        </section>
      `;
    }
  }
  
  window.addEventListener("hashchange", carregarPagina);
  window.addEventListener("DOMContentLoaded", carregarPagina);
  