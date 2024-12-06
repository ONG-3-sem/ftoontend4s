$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });

  const sections = $("section");
  const navItems = $(".nav-item");

  $(window).on("scroll", function () {
    const header = $("header");
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
      header.css("box-shadow", "none");
    } else {
      header.css("box-shadow", "5px 1px 5px rgba(0, 0, 0, 0.1");
    }

    sections.each(function (i) {
      const section = $(this);
      const sectionTop = section.offset().top - 96;
      const sectionBottom = sectionTop + section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return false;
      }
    });

    navItems.removeClass("active");
    $(navItems[activeSectionIndex]).addClass("active");
  });

  ScrollReveal().reveal("#cta", {
    origin: "left",
    duration: 2000,
    distance: "20%",
  });

  ScrollReveal().reveal(".dish", {
    origin: "left",
    duration: 2000,
    distance: "20%",
  });

  ScrollReveal().reveal("#testimonial_chef", {
    origin: "left",
    duration: 1000,
    distance: "20%",
  });

  ScrollReveal().reveal(".feedback", {
    origin: "right",
    duration: 1000,
    distance: "20%",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("donation-form");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio real do formulário

    // Limpar as mensagens anteriores
    successMessage.style.display = "none";
    errorMessage.style.display = "none";

    // Pegando os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const valor = document.getElementById("valor").value;

    // Validar se todos os campos estão preenchidos (simulação de validação)
    if (nome && email && valor) {
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        successMessage.style.display = "block";
      } else {
        errorMessage.style.display = "block";
      }
    } else {
      errorMessage.style.display = "block";
    }
  });
});

//comentários
// Certifique-se de que o código para comentários venha após o carregamento da página
$(document).ready(function () {
  // Captura o envio do formulário de comentários
  $("#comment-form").on("submit", function (e) {
    e.preventDefault(); // Previne o envio do formulário (evita recarregar a página)

    // Obtém os valores dos campos do formulário
    var nome = $("#nome-comentario").val();
    var comentario = $("#comentario").val();

    // Verifica se ambos os campos estão preenchidos
    if (nome && comentario) {
      // Cria um novo comentário
      var novoComentario = `
                <div class="comentario-item">
                    <p class="nome">${nome}</p>
                    <p>${comentario}</p>
                </div>
            `;

      // Adiciona o novo comentário à lista de comentários
      $("#comentarios-lista").append(novoComentario);

      // Limpa os campos do formulário
      $("#nome-comentario").val("");
      $("#comentario").val("");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
});
