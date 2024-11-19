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
                // feed.innerHTML = "";
                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];
                    
                    
                    var dataCompleta = new Date(publicacao.Data);
                    var dataSimples = dataCompleta.toLocaleDateString("pt-BR") 
                    


                    DescricaoPost = publicacao.Descricao;
                    NomeDonoPost = publicacao.Nome;
                    DataPost = dataSimples;


                    div_ContemPost.innerHTML += `
                    
                    <div class="div_Conteudo"><span>${NomeDonoPost}</span><br>
                    <span>${DataPost}</span><br>
                    <span> ${DescricaoPost}</span>
                    </div>
                    <div class="div_Botoes">
                        <img src="../img/comentario.png" alt=""> <span>qtd</span>
                        <img src="../img/heart_icon-icons.com_48290.png" alt=""> <span>qtd</span>
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