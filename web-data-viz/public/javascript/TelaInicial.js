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

                var feed = document.getElementById("div_ContemPost");
                feed.innerHTML = "";
                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];
                    
                    

                    // criando e manipulando elementos do HTML via JavaScript
                    var divPublicacao = document.createElement("div");
                    var spanNome = document.createElement("span");
                    var spanDescricao = document.createElement("span");
                    var spanData = document.createElement("span");
                    // var divDescricao = document.createElement("div");
                    var divButtons = document.createElement("div");

                    var btnCurtir = document.createElement("img");
                    var btnComentar = document.createElement("img");
                    var dataCompleta = new Date(publicacao.Data);
                    var dataSimples = dataCompleta.toLocaleDateString("pt-BR") 
                    


                    spanDescricao.innerHTML = publicacao.Descricao;
                    spanNome.innerHTML = publicacao.Nome;
                    spanData.innerHTML = dataSimples;

                    divPublicacao.className = "div_Conteudo";

                    btnCurtir.src = "../img/heart_icon-icons.com_48290.png";
                    btnCurtir.alt = "Curtir";
                    btnCurtir.onclick = "curtir";
                    
                    btnComentar.src = "../img/comentario.png";
                    btnComentar.alt = "Curtir";
                    btnCurtir.onclick = "comentar";

                    divButtons.className = "div_Botoes"


                    divPublicacao.appendChild(spanNome);
                    divPublicacao.appendChild(spanData);
                    divPublicacao.appendChild(spanDescricao);
                    divButtons.appendChild(btnCurtir);
                    divButtons.appendChild(btnComentar);
                    feed.appendChild(divPublicacao);
                    feed.appendChild(divButtons);
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
<div class="div_PadraoInput">

                    <div class="div_Conteudo"></div>
                    <div class="div_Botoes">
                        <img src="../img/comentario.png" alt=""> <span>qtd</span>
                        <img src="../img/heart_icon-icons.com_48290.png" alt=""> <span>qtd</span>
                    </div>

                </div>
<div class="div_PadraoInput">

                    <div class="div_Conteudo"></div>
                    <div class="div_Botoes">
                        <img src="../img/comentario.png" alt=""> <span>qtd</span>
                        <img src="../img/heart_icon-icons.com_48290.png" alt=""> <span>qtd</span>
                    </div>

                </div>
<div class="div_PadraoInput">

                    <div class="div_Conteudo"></div>
                    <div class="div_Botoes">
                        <img src="../img/comentario.png" alt=""> <span>qtd</span>
                        <img src="../img/heart_icon-icons.com_48290.png" alt=""> <span>qtd</span>
                    </div>

                </div>
<div class="div_PadraoInput">

                    <div class="div_Conteudo"></div>
                    <div class="div_Botoes">
                        <img src="../img/comentario.png" alt=""> <span>qtd</span>
                        <img src="../img/heart_icon-icons.com_48290.png" alt=""> <span>qtd</span>
                    </div>

                </div>
<div class="div_PadraoInput">

                    <div class="div_Conteudo"></div>
                    <div class="div_Botoes">
                        <img src="../img/comentario.png" alt=""> <span>qtd</span>
                        <img src="../img/heart_icon-icons.com_48290.png" alt=""> <span>qtd</span>
                    </div>

                </div>
<div class="div_PadraoInput">

                    <div class="div_Conteudo"></div>
                    <div class="div_Botoes">
                        <img src="../img/comentario.png" alt=""> <span>qtd</span>
                        <img src="../img/heart_icon-icons.com_48290.png" alt=""> <span>qtd</span>
                    </div>

                </div>
<div class="div_PadraoInput">

                    <div class="div_Conteudo"></div>
                    <div class="div_Botoes">
                        <img src="../img/comentario.png" alt=""> <span>qtd</span>
                        <img src="../img/heart_icon-icons.com_48290.png" alt=""> <span>qtd</span>
                    </div>

                </div>
<div class="div_PadraoInput">

                    <div class="div_Conteudo"></div>
                    <div class="div_Botoes">
                        <img src="../img/comentario.png" alt=""> <span>qtd</span>
                        <img src="../img/heart_icon-icons.com_48290.png" alt=""> <span>qtd</span>
                    </div>

                </div>
<div class="div_PadraoInput">

                    <div class="div_Conteudo"></div>
                    <div class="div_Botoes">
                        <img src="../img/comentario.png" alt=""> <span>qtd</span>
                        <img src="../img/heart_icon-icons.com_48290.png" alt=""> <span>qtd</span>
                    </div>

                </div>
<div class="div_PadraoInput">

                    <div class="div_Conteudo"></div>
                    <div class="div_Botoes">
                        <img src="../img/comentario.png" alt=""> <span>qtd</span>
                        <img src="../img/heart_icon-icons.com_48290.png" alt=""> <span>qtd</span>
                    </div>

                </div>*/