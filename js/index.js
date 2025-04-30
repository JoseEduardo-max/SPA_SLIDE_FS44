const rotas = {
    introducao: "introducao.html",
    instala: "instala.html",
    porque: "porque.html",
    sabermais: "sabermais.html",
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
          <h2>Bem-vindo ao Guia i18next!</h2>
          <p>Use o menu acima para navegar pelas seções.</p>
        </section>
      `;
    }
  }
  
  window.addEventListener("hashchange", carregarPagina);
  window.addEventListener("DOMContentLoaded", carregarPagina);
  