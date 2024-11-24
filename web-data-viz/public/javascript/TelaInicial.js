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
          var idLikePessoa = publicacao.idLike;
          var dataCompleta = new Date(publicacao.DataPost);
          var dataSimples = dataCompleta.toLocaleDateString("pt-BR")
          DataPost = dataSimples;
          var idPost = publicacao.PostId;
          
          console.log(publicacao.qtdLikes)

          if (QuemCurtiu == idUsuario) {
            srcCoracaoBranco = `"img/love_like_heart_icon_196980.png" alt="" onclick="Descurtir(${idPost}, ${idLikePessoa})"`
          } else if (QuemCurtiu != idUsuario) {
            srcCoracaoBranco = `"img/heart_icon-icons.com_48290.png" alt="" onclick="curtir(${idPost})"`
          }

          div_ContemPost.innerHTML += `
                    
                    <div class="div_PadraoInput"> 
                    <div class="div_Conteudo" onclick = "abrirPost(${idPost})"><span>${NomeDonoPost}</span><br>
                    <span>${DataPost}</span><br>
                    <span> ${DescricaoPost}</span>
                    </div>
                    <div class="div_Botoes">
                        <img src="../img/comentario.png" alt="" onclick="abrirPost(${idPost})"> <span>${QuantidadeComentarios}</span>
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
function fecharPost(){
  div_PublicarPost.style.display = 'none';
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

function curtir(idPost) {
  var idUsuarioVar = sessionStorage.ID_USUARIO;
  var idPostVar = idPost;

  fetch("/feed/curtir", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idUsuarioServer: idUsuarioVar,
      idPostServer: idPostVar
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {

        window.location = "TelaInicial.html";

      } else {
        throw "Houve um erro ao tentar realizar o cadastro! 1";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;

}

function Descurtir(idPost, idLikePessoa) {

  var idUsuarioVar = sessionStorage.ID_USUARIO;
  var idPostVar = idPost;
  var idLikeVar = idLikePessoa;

  fetch("/feed/descurtir", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idUsuarioServer: idUsuarioVar,
      idPostServer: idPostVar,
      idLikeServer: idLikeVar
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {

        window.location = "TelaInicial.html";

      } else {
        throw "Houve um erro ao tentar realizar o cadastro! 1";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;
}

function AtualizarMenuLateral() {

  fetch("/feed/atualizarlateral").then(function (resposta) {
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

        // var idUsuario = sessionStorage.ID_USUARIO;

        for (let i = 0; i < resposta.length; i++) {
          var publicacao = resposta[i];

          var DescricaoPost = publicacao.PostDescricao;
          var NomeDonoPost = publicacao.NomePostou;
          var DescricaoCortada = DescricaoPost.split(" ").slice(0, 3).join(" ");
          var idPost = publicacao.PostId;
          var dataCompleta = new Date(publicacao.DataPost);
          var dataSimples = dataCompleta.toLocaleDateString("pt-BR")
          DataPost = dataSimples;

          lista_lateral.innerHTML += `
                      <ul>
                        <div>
                            <li><a onclick="abrirPost(${idPost})"><p id= "id_DadosDono"><span id="span_1">${NomeDonoPost}</span> <span id="span_2">${DataPost}</span><br><span id="span_3">${DescricaoCortada}</span></p></a></li>
                        </div>
                      </ul>
                     `
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

// <div>
//     <li><a href="../QuemSomos/TelaSobreNos.html">ASSUNTO 1</a></li>
// </div>
// <div>
//     <li><a href="../Serviços/TelaServicos.html">ASSUNTO 2</a></li>
// </div>
// <div>
//     <li><a href="../Simulador/Simulador.html">ASSUNTO 3</a></li>
// </div>

function abrirPost(idPost){
  sessionStorage.ID_POST = idPost; 
  window.location = "TelaInicial.html"

}

