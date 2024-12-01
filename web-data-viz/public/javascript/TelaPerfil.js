function dadosPerfil() {

    var idUser = sessionStorage.ID_USUARIO;

    fetch(`/usuarios/dadosPerfil/${idUser}`).then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {

            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));



                span_nome.innerHTML = resposta[0].nomeCompleto;
                span_numero.innerHTML = resposta[0].numeroCelular;
                span_email.innerHTML = resposta[0].email;

                if(resposta[0].tipoPerfil == undefined){
                    span_perfil.innerHTML = 'Fazer quiz...';
                }else{
                    span_perfil.innerHTML = resposta[0].tipoPerfil;
                }


            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });

}