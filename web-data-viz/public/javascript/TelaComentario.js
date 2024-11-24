/*Função para atualizar o post na div*/
/*Função para puxar todos os comentários*/
/*Função para Comentar*/



function buscarPost() {

    var idPost = sessionStorage.ID_POST;
    alert(idPost)
    fetch(`/comentarios/buscarPost/${idPost}`).then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          throw "Nenhum resultado encontrado!! - aqui 1";
        }
  
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
  
          // var feed = document.getElementById("div_ContemPost");
          // feed.innerHTML = "";
  
          var srcCoracaoBranco = '"img/heart_icon-icons.com_48290.png" alt="" onclick="curtir()"'
          var idUsuario = sessionStorage.ID_USUARIO;
  
 
            var publicacao = resposta[0];
  
            var DescricaoPost = publicacao.Descricao;
            var NomeDonoPost = publicacao.NomeUser;
            var QuemCurtiu = publicacao.idQuemCurtiu;
            var QuantidadeLikes = publicacao.qtdLikes;
            var QuantidadeComentarios = publicacao.qtdComentarios;
            var idLikePessoa = publicacao.idLike;
            var dataCompleta = new Date(publicacao.DataPostagem);
            var dataSimples = dataCompleta.toLocaleDateString("pt-BR")
            DataPost = dataSimples;
            var idPost = publicacao.PostId;
            
            console.log(publicacao.qtdLikes)

  
            div_teste.innerHTML += `
                      
              
                      <div class="div_Conteudo"><span>${NomeDonoPost}</span><br>
                      <span>${DataPost}</span><br>
                      <span> ${DescricaoPost}</span>
            
                         `
  
  

        });
      } else {
        throw ('Houve um erro na API!');
      }
    }).catch(function (resposta) {
      console.error(resposta);
      finalizarAguardar();
    });
  
  
  
  }


  function buscarComentarios() {
    var idPost = sessionStorage.ID_POST;
    fetch(`/comentarios/buscarComentarios/${idPost}`).then(function (resposta) {
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
  
            var DescricaoPost = publicacao.DescricaoComentario;
            var NomeDonoPost = publicacao.NomeQuemComentou;

            console.log(publicacao.qtdLikes)
  
            div_vaiFicarComentarios.innerHTML += `
                      
                      <div class="div_PadraoInput2"> 
                      <div class="div_Conteudo" onclick = "abrirPost(${idPost})"><span>${NomeDonoPost}</span><br>
                      <span> ${DescricaoPost}</span>
                      </div>
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