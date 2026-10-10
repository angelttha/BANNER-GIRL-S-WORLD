const pesquisa = document.getElementById("pesquisa");

pesquisa.addEvenListener("input", function () {
  
  const texto = pesquisa.value.toLowerCase();
  
  const produtos = 
    document.querySeletorAll(".produto-card");

  produtos.forEach(function (produtos) {
    const nome =
      produto.innerText.toLowerCase();

    if(nome.includes(texto)) {
      produto.style.display = "block";
    } else {
      produto.style.display = "none";
    }
  });
});

// FAVORITAR PRODUTOS

const favoritos = 
  document.querySelectorAll(".favorito");

favoritos.forEach(function (botao) {
  
  batao.addEventListener("click", function () {
    
    if(botao.innerText === "♡") {
      botao.innerText = "♥";
    } else {
      botao.innerText = "♡";
      }
    
  })
})

// QUIZ

const botaoQuiz =
  document.getEvenListener("click", function () {

    alert(        
  "✨ Vamos descobrir sua rotina de beleza ideal!"
   );
});

// NEWSLETTER

const formulario =
  document.querySelector(".newsletter from");

formulario.addEventListener("submit", function(event) {
  
  event.preventDefault();

  alert(
    "💗 E-mail cadastrado com sucesso!"
  );

  
});