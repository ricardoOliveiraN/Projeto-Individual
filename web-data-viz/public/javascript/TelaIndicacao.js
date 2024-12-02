/*QUERO BUSCAR OS POSTS DO BANCO DE DADOS E COLOCAR NA DIV*/
/*QUERO BUSCAR OS COMENTÁRIOS DO BANCO DE DADOS E COLOCAR NA DIV*/
/*ao clicar no coração (botão), chamará uma função de UPDATE para aumentar a quantidade de like*/
/*Fazer validação de tamanho de input*/



function AtualizarDiv() {

    fetch("/indicacao/listar").then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          throw "Nenhum resultado encontrado!!";
        }
  
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
  
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
            var titulo = publicacao.Titulo;
            var autor = publicacao.Autor;
            
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
                      <span>Título: ${titulo}</span><br>
                      <span>Autor: ${autor}</span><br>
                      <span>Resenha: ${DescricaoPost}</span>
                      </div>
                      <div class="div_Botoes">
                          <img src="../img/comentario.png" alt="" onclick="abrirPost(${idPost})"> <span>${QuantidadeComentarios}</span>
                          <img src=${srcCoracaoBranco}> <span>${QuantidadeLikes}</span>
                      </div>
                      </div> `
  
  
          }
  
          // finalizarAguardar();
        });
      } else {
        throw ('Houve um erro na API!');
      }
    }).catch(function (resposta) {
      console.error(resposta);
      // finalizarAguardar();
    });
  
  
  
  }
  

  
  function enviarPost() {
    div_PublicarPost.style.display = 'flex';
  
  }
  function fecharPost(){
    div_PublicarPost.style.display = 'none';
  }
  
  
  function publicar() {
    
    var tituloVar = inp_nomeObra.value;
    var autorVar = inp_autorObra.value;
    var idUsuarioVar = sessionStorage.ID_USUARIO;
    var TextoPostVar = textarea_descricao.value;
  
    if (
      TextoPostVar == "" || tituloVar == "" || autorVar == "" || TextoPostVar.length > 200 || tituloVar.length > 200 || autorVar.length > 200
    ) {
      return false;
    } else {
    }
    fetch("/indicacao/publicar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idUsuarioServer: idUsuarioVar,
        descricaoServer: TextoPostVar,
        tituloServer: tituloVar,
        autorServer: autorVar
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);
  
        if (resposta.ok) {
  
          div_PublicarPost.style.display = 'none';
          window.location = "TelaIndicacao.html";
  
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  
    return false;
  
  }
  
  
  function curtir(idPost) {
    var idUsuarioVar = sessionStorage.ID_USUARIO;
    var idPostVar = idPost;
  
    fetch("/indicacao/curtir", {
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
  
          window.location = "TelaIndicacao.html";
  
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
  
    fetch("/indicacao/descurtir", {
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
  
          window.location = "TelaIndicacao.html";
  
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
  
    fetch("/indicacao/atualizarlateral").then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          var indicacao = document.getElementById("div_ContemPost");
          var mensagem = document.createElement("span");
          mensagem.innerHTML = "Nenhum resultado encontrado."
          indicacao.appendChild(mensagem);
          throw "Nenhum resultado encontrado!!";
        }
  
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
  
          // var indicacao = document.getElementById("div_ContemPost");
          // indicacao.innerHTML = "";
  
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
  
          // finalizarAguardar();
        });
      } else {
        throw ('Houve um erro na API!');
      }
    }).catch(function (resposta) {
      console.error(resposta);
      // finalizarAguardar();
    });
  
  
  }
  
  
  function abrirPost(idPost){
    sessionStorage.ID_POST = idPost; 
    window.location = "TelaComentario2.html"
  
  }
  
  