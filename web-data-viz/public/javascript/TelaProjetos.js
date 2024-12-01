function proximaTela(idProjeto) {

    sessionStorage.ID_PROJETO = idProjeto;

    buscarDadosProjeto(idProjeto);

}

function buscarDadosInicio() {

    var fkUser = sessionStorage.ID_USUARIO;

    fetch(`/projetos/buscarDadosInicio/${fkUser}`).then(function (resposta) {
        if (resposta.ok) {


            if (resposta.status == 204) {

            }

            else {

                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));

                    number_titulo.innerHTML = `(${resposta.length}/3)`;

                    for (let i = 0; i < resposta.length; i++) {

                        var publicacao = resposta[i].Inicio;
                        
                        var dataInicioCompleta = new Date(publicacao);
                        var dataInicioSimples = dataInicioCompleta.toLocaleDateString("pt-BR")

                        if (resposta.length == 1) {
                            span1_1.innerHTML = resposta[0].nome;
                            span1_2.innerHTML = resposta[0].statusProjeto;
                            span1_3.innerHTML = dataInicioSimples;
                        } else if (resposta.length == 2) {
                            span1_1.innerHTML = resposta[0].nome;
                            span1_2.innerHTML = resposta[0].statusProjeto;
                            span1_3.innerHTML = dataInicioSimples;
                            span2_1.innerHTML = resposta[1].nome;
                            span2_2.innerHTML = resposta[1].statusProjeto;
                            span2_3.innerHTML = dataInicioSimples;
                        } else {
                            span1_1.innerHTML = resposta[0].nome;
                            span1_2.innerHTML = resposta[0].statusProjeto;
                            span1_3.innerHTML = dataInicioSimples;
                            span2_1.innerHTML = resposta[1].nome;
                            span2_2.innerHTML = resposta[1].statusProjeto;
                            span2_3.innerHTML = dataInicioSimples;
                            span3_1.innerHTML = resposta[2].nome;
                            span3_2.innerHTML = resposta[2].statusProjeto;
                            span3_3.innerHTML = dataInicioSimples;
                        }


                    }

                });
            }
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });

}


function buscarDadosProjeto(idProjeto) {

    var idProjeto = idProjeto;
    var fkUser = sessionStorage.ID_USUARIO;

    fetch(`/projetos/buscarProjeto/${idProjeto}/${fkUser}`).then(function (resposta) {
        if (resposta.ok) {


            if (resposta.status == 204) {
                div_PrimeiraParte.style.display = 'none';
                div_SegundaParte.style.display = 'flex';
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));



                var nome = resposta[0].nome;
                var publico = resposta[0].publico;
                var solucao = resposta[0].solucao;
                var statusProjeto = resposta[0].statusProjeto;

                div_PrimeiraParte.style.display = 'none';
                div_SegundaParteB.style.display = 'flex';

                span_1.innerHTML = `${nome}`;
                span_2.innerHTML = `${publico}`;
                span_3.innerHTML = `${solucao}`;
                span_4.innerHTML = `${statusProjeto}`;



            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });

}

function adicionarProjeto() {

    var fkUserVar = sessionStorage.ID_USUARIO;
    var idProjetosVar = sessionStorage.ID_PROJETO;
    var nomeProjetoVar = inp_nomeProjeto.value;
    var publicoAlvoVar = inp_publicoAlvo.value;
    var solucaoVar = inp_solucao.value;
    var statusVar = inp_status.value;

    if (nomeProjetoVar == '' || publicoAlvoVar == '' || solucaoVar == '') {
        alert('Você precisa preencher todos os campos!!')
    } else if (nomeProjetoVar.length > 45) {
        alert('O nome do projeto precisa ser menor!!')
    } else if (publicoAlvoVar.length > 45) {
        alert('O público alvo precisa conter menos caracteres !!')
    } else if (solucaoVar > 200) {
        alert('A solução precisa ser menor!!')
    } else {

        fetch("/projetos/publicar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idUsuarioServer: fkUserVar,
                idProjetosServer: idProjetosVar,
                nomeProjetoServer: nomeProjetoVar,
                publicoAlvoServer: publicoAlvoVar,
                solucaoServer: solucaoVar,
                statusServer: statusVar
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {

                    // div_SegundaParte.style.display = 'none';
                    // div_TerceiraParte.style.display = 'flex';
                    /*Precisa fazer a função get pra puxar os requisitos?*/
                    window.location = 'TelaProjetoBack.html';


                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

        return false;


    }
}
function abrirAdicaoReq() {
    div_TerceiraParteB.style.display = 'flex';
}

function publicarRequisito() {

    var tituloVar = inp_tituloRequisito.value;
    var fkProjetoVar = sessionStorage.ID_PROJETO;
    var fkUserVar = sessionStorage.ID_USUARIO;
    var TextoRequisitoVar = textarea_descricao.value;

    if (
        TextoRequisitoVar == "" || tituloVar == ""
    ) {
        alert('Você precisa preencher os campos!!')
    } else if (TextoRequisitoVar.length > 150) {
        alert('A descrição deve ser menor!!')
    } else if (tituloVar.length > 45) {
        alert('O título deve ser menor!!')
    }

    else {
    }
    fetch("/projetos/publicarRequisito", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            tituloServer: tituloVar,
            fkProjetoServer: fkProjetoVar,
            fkUserServer: fkUserVar,
            TextoRequisitoServer: TextoRequisitoVar
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {

                div_TerceiraParteB.style.display = 'none';
                /*fazer função para atualizar div de requisitos*/
                // buscarRequisitos();
                window.location = 'TelaProjetoBack.html';
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;


}


function buscarRequisitos() {

    var fkUser = sessionStorage.ID_USUARIO;
    var fkProjeto = sessionStorage.ID_PROJETO;


    fetch(`/projetos/buscarRequisito/${fkProjeto}/${fkUser}`).then(function (resposta) {
        if (resposta.ok) {


            if (resposta.status == 204) {

            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                var imagem = "img/quadradoVazado.png"

                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];

                    var idRequisitos = publicacao.idRequisitos;
                    var nome = publicacao.nomeRequisito;
                    var descricao = publicacao.descricaoRequisito;
                    var dataFim = publicacao.dataFim;
                    var dataInicioCompleta = new Date(publicacao.dataInicio);
                    var dataInicioSimples = dataInicioCompleta.toLocaleDateString("pt-BR")



                    if (dataFim == null) {
                        dataFim = 'Em andamento...'
                        var imagem = "img/quadradoVazado.png"
                    } else {
                        var dataFimCompleta = new Date(publicacao.dataFim);
                        var dataFimSimples = dataFimCompleta.toLocaleDateString("pt-BR");
                        dataFim = dataFimSimples;
                        imagem = "img/SimboloCertinho.png";
                    };


                    div_conterRequisitos.innerHTML += `
                    
                    <div class="div_requisitos">

                            <div class="div_textoReq">
                                <span class="span_bold">Titulo:</span> 
                                <span class="span_texto">${nome}</span>
                                <span class="span_bold">Descricao:</span>
                                <span class="span_texto">${descricao}</span>
                                <span class="span_bold">Data início:</span>
                                <span class="span_texto">${dataInicioSimples}</span>
                                <span class="span_bold">Data conclusão:</span>
                                <span class="span_texto">${dataFim}</span>
                            </div>
                            <div class="div_imagens">

                                <div class="div_imgQuadrado"><img src=${imagem} alt="" onclick="concluirReq(${idRequisitos})"></div>

                            </div>


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


function concluirReq(idRequisitos) {



    var idRequisitosVar = idRequisitos;
    var fkUserVar = sessionStorage.ID_USUARIO;
    var fkProjetoVar = sessionStorage.ID_PROJETO;

    fetch("/projetos/conclusaoReq", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idRequisitoServer: idRequisitosVar,
            fkProjetoServer: fkProjetoVar,
            fkUserServer: fkUserVar
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {



                window.location = 'TelaProjetoBack.html';
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;


}

function voltar() {
    window.location = 'TelaProjetos.html';
}

function telaReq(){
    window.location = 'TelaProjetoBack.html';
}

function telaGraficos(){
    window.location = 'TelaProjetoGraf.html';
}





/*GRÁFICOS

- número total de requisitos
- numero total de requisitos concluídos x numero total de requisitos não concluídos
- quantidade de requisitos concluídos x data de conclusão dos requisitos



*/

function dadosKPI(){

    var fkUser = sessionStorage.ID_USUARIO;
    var fkProjeto = sessionStorage.ID_PROJETO;

    fetch(`/projetos/dadosKPI/${fkProjeto}/${fkUser}`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (resposta) {
            

                kpi_requisitos.innerHTML = resposta[0].totalReq;
            

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });

}


function graficoUm(){
    
    var fkUser = sessionStorage.ID_USUARIO;
    var fkProjeto = sessionStorage.ID_PROJETO;

    fetch(`/projetos/graficoUm/${fkProjeto}/${fkUser}`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (resposta) {
            

                a.innerHTML = resposta[0].naoConcluido;
                a.innerHTML = resposta[0].Concluido;
            

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });

}
