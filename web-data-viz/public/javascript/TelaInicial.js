/*QUERO BUSCAR OS POSTS DO BANCO DE DADOS E COLOCAR NA DIV*/
/*QUERO BUSCAR OS COMENTÁRIOS DO BANCO DE DADOS E COLOCAR NA DIV*/
/*ao clicar no coração (botão), chamará uma função de UPDATE para aumentar a quantidade de like*/



function AtualizarDiv() {

  fetch("/feed/listar").then(function (resposta) {
    if (resposta.ok) {
      if (resposta.status == 204) {
        var feed = document.getElementById("div_ContemPost");
        var mensagem = document.createElement("span");
        mensagem.innerHTML = "Nenhum resultado encontrado."
        feed.appendChild(mensagem);
        throw "Nenhum resultado encontrado!!";
      }

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        // var feed = document.getElementById("div_ContemPost");
        // feed.innerHTML = "";

        var srcCoracaoBranco = '"img/heart_icon-icons.com_48290.png" alt="" onclick="curtir()"'
        var idUsuario = sessionStorage.ID_USUARIO;

        for (let i = 0; i < resposta.length; i++) {
          var publicacao = resposta[i];

          var DescricaoPost = publicacao.PostDescricao;
          var NomeDonoPost = publicacao.NomePostou;
          var QuemCurtiu = publicacao.idQuemCurtiu;
          var QuantidadeLikes = publicacao.qtdLikes;
          var QuantidadeComentarios = publicacao.qtdComentarios;    
          var dataCompleta = new Date(publicacao.DataPost);
          var dataSimples = dataCompleta.toLocaleDateString("pt-BR")
          DataPost = dataSimples;

          console.log(publicacao.qtdLikes)

          if(QuemCurtiu == idUsuario ){
            srcCoracaoBranco = '"img/love_like_heart_icon_196980.png" alt="" onclick="Descurtir()"'
          }else{
            srcCoracaoBranco = '"img/heart_icon-icons.com_48290.png" alt="" onclick="curtir()"'
          }

          div_ContemPost.innerHTML += `
                    
                    <div class="div_PadraoInput"> 
                    <div class="div_Conteudo"><span>${NomeDonoPost}</span><br>
                    <span>${DataPost}</span><br>
                    <span> ${DescricaoPost}</span>
                    </div>
                    <div class="div_Botoes">
                        <img src="../img/comentario.png" alt="" onclick="comentar()"> <span>${QuantidadeComentarios}</span>
                        <img src=${srcCoracaoBranco}> <span>${QuantidadeLikes}</span>
                    </div>
                    </div> `


        }

        finalizarAguardar();
      });
    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
    finalizarAguardar();
  });



}

/*<div class="div_PadraoInput">

                    <div class="div_Conteudo"></div>
                    <div class="div_Botoes">
                        <img src="../img/comentario.png" alt=""> <span>qtd</span>
                        <img src="../img/heart_icon-icons.com_48290.png" alt=""> <span>qtd</span>
                    </div>

                </div>
*/

function enviarPost() {
  div_PublicarPost.style.display = 'flex';

}

function publicar() {

  var idUsuarioVar = sessionStorage.ID_USUARIO;
  var TextoPostVar = textarea_descricao.value;

  if (
    TextoPostVar == ""
  ) {
    return false;
  } else {
  }
  fetch("/feed/publicar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idUsuarioServer: idUsuarioVar,
      descricaoServer: TextoPostVar
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {


        div_PublicarPost.style.display = 'none';
        window.location = "TelaInicial.html";

      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;

}

// Faz um select no post e curtidas, em que a l.fkPost = p.idPost e l.fkUsuario = u.idUsuario (salvo na sessão), se o valor da resposta for igual a zero, botão fica branco, caso contrário fica vermelho.


function Atualizarcurtir() {



}

function curtir() {




}