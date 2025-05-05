const rotas = {
  i18next: "i18next.html",
  quilljs: "quilljs.html",
  select2: "select2.html",
  filterizr: "filterizr.html",
};

async function carregarPagina() {
  const hash = location.hash.replace("#", "");
  const conteudo = document.getElementById("conteudo");
  const header = document.querySelector("header");

  const arquivo = rotas[hash];

  conteudo.classList.add("fade");

  if (arquivo) {
    try {
      const resposta = await fetch(arquivo);
      const html = await resposta.text();
      conteudo.innerHTML = html;

      if (arquivo !== "index.html") {
        header.style.display = "none";
      } else {
        header.style.display = "";
      }

      setTimeout(() => conteudo.classList.remove("fade"), 500);
    } catch (erro) {
      conteudo.innerHTML = "<section><h2>Erro ao carregar a página.</h2></section>";
      header.style.display = "";
      setTimeout(() => conteudo.classList.remove("fade"), 500);
    }
  } else {
    conteudo.innerHTML = `
      <section>
        <h2>Bem-vindo ao Slide de Apresentação!</h2>
        <p>Use o menu acima para navegar pelas Bibliotecas.</p>
      </section>
    `;
    header.style.display = "";
    setTimeout(() => conteudo.classList.remove("fade"), 500);
  }
}

window.addEventListener("hashchange", carregarPagina);
window.addEventListener("DOMContentLoaded", carregarPagina);

window.openModal = function(img) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  modal.style.display = 'flex';
  modalImg.src = img.src;
};

window.closeModal = function() {
  document.getElementById('imageModal').style.display = 'none';
};