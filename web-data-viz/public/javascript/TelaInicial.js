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
                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];


                    var dataCompleta = new Date(publicacao.Data);
                    var dataSimples = dataCompleta.toLocaleDateString("pt-BR")



                    DescricaoPost = publicacao.Descricao;
                    NomeDonoPost = publicacao.Nome;
                    DataPost = dataSimples;


                    div_ContemPost.innerHTML += `
                    
                    <div class="div_PadraoInput">

             
                    <div class="div_Conteudo"><span>${NomeDonoPost}</span><br>
                    <span>${DataPost}</span><br>
                    <span> ${DescricaoPost}</span>
                    </div>
                    <div class="div_Botoes">
                        <img src="../img/comentario.png" alt="" onclick="comentar()"> <span>qtd</span>
                        <img src="../img/heart_icon-icons.com_48290.png" alt="" onclick="curtir()"> <span>qtd</span>
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

    // Verificando se há algum campo em branco
    if (
      TextoPostVar == ""
    ){
    //   cardErro.style.display = "block";
    //   mensagem_erro.innerHTML =
        // "(Mensagem de erro para todos os campos em branco)";

    //   finalizarAguardar();
      return false;
    } else {
    //   setInterval(sumirMensagem, 5000);
    }

    // Enviando o valor da nova input
    fetch("/feed/publicar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        idUsuarioServer: idUsuarioVar,
        descricaoServer: TextoPostVar
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
        //   cardErro.style.display = "block";

        //   mensagem_erro.innerHTML =
            // "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

        //   setTimeout(() => {

            div_PublicarPost.style.display = 'none';
            window.location = "TelaInicial.html";
        //   }, "2000");

        //   limparFormulario();
        //   finalizarAguardar();
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
      });

    return false;


}