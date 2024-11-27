/*Função para atualizar o post na div*/
/*Função para puxar todos os comentários*/
/*Função para Comentar*/
/*Fazer validação de tamanho de input*/


function buscarPost() {

    var idPost = sessionStorage.ID_POST;
    fetch(`/comentarios/buscarPost/${idPost}`).then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          throw "Nenhum resultado encontrado!! - aqui 1";
        }
  
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));

 
            var publicacao = resposta[0];
  
            var DescricaoPost = publicacao.Descricao;
            var NomeDonoPost = publicacao.NomeUser;
   
            var dataCompleta = new Date(publicacao.DataPostagem);
            var dataSimples = dataCompleta.toLocaleDateString("pt-BR")
            DataPost = dataSimples;

            
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

          throw "Nenhum resultado encontrado!!";
        }
  
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
  

  
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

        });
      } else {
        throw ('Houve um erro na API!');
      }
    }).catch(function (resposta) {
      console.error(resposta);

    });
  
  }

  function publicar() {



    var idUsuarioVar = sessionStorage.ID_USUARIO;
    var TextoPostVar = textarea_descricao.value;
    var idPostVar = sessionStorage.ID_POST;
  
    if (
      TextoPostVar == ""
    ) {
      return false;
    } else {
    }
    fetch("/comentarios/publicar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idUsuarioServer: idUsuarioVar,
        descricaoServer: TextoPostVar,
        idPostServer: idPostVar
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);
  
        if (resposta.ok) {
            
            div_PublicarPost.style.display = 'none';
            window.location = "TelaComentario.html";
            
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  
    return false;
  
  }

  function enviarPost(){
    div_PublicarPost.style.display = 'flex';
  }

  function fecharPost(){
    div_PublicarPost.style.display = 'none';
  }
  