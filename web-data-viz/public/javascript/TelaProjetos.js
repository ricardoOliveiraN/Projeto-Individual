function proximaTela(idProjeto) {

    sessionStorage.ID_PROJETO = idProjeto;

    buscarDadosProjeto(idProjeto);

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

                nome, publico, solucao, statusProjeto

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

                    div_SegundaParte.style.display = 'none';
                    div_TerceiraParte.style.display = 'flex';
                    

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




