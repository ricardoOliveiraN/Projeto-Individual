
var lista_numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lista_caracteres = ['!', '@', '#', '$', '%', '&', '*', '-', '.', '_'];

var lista_letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'X', 'Z'];

var qtdEmailCorreto = 0;
var qtdCelularCorreto = 0;
var CelularTeste = 1;
var SalvarCelular = "";
var qtdNomeCorreto = 0;
var qtdCorreto = 0;
var qtdCorretoMini = 0;
var qtdCorretoMais = 0;
var qtdCorretoTam = 0;
var qtdSenhaIgual = 0;
var celularQTDCorreto = 0;




function validar() {

    var Nome = inp_nome.value.toUpperCase();
    var Email = inp_email.value;
    var Celular = inp_celular.value;

    var Senha = inp_senha.value;
    var confirmarSenha = inp_confirmarSenha.value;


    // verificar email:


    if (Email != '') {

        var posicaoArrobaIn = Email.includes('@');
        var tamanhoEmail = Email.length;
        var posicaoCOM = Email.indexOf('.com');
        var posicaoBR = Email.indexOf('.br');
        var posicaoArroba = Email.indexOf('@');
        var possuiEspaco = Email.includes(' ')


        if (posicaoCOM > posicaoArroba || posicaoBR > posicaoArroba) {


            if (((Email[tamanhoEmail - 1] == 'm' && Email[tamanhoEmail - 2] == 'o' && Email[tamanhoEmail - 3] == 'c' && Email[tamanhoEmail - 4] == '.') || (Email[tamanhoEmail - 1] == 'r' && Email[tamanhoEmail - 2] == 'b' && Email[tamanhoEmail - 3] == '.' && Email[tamanhoEmail - 4] == 'm' && Email[tamanhoEmail - 5] == 'o' && Email[tamanhoEmail - 6] == 'c' && Email[tamanhoEmail - 7] == '.')) && possuiEspaco == false && posicaoArrobaIn == true) {
                qtdEmailCorreto += 1;
                inp_email.style.borderColor = 'green';
                EmailDefinitivo = Email;
            } else {
                inp_email.style.borderColor = 'red';
                qtdEmailCorreto = 0;
            }
        } else {

            if (((Email[tamanhoEmail - 1] == 'm' && Email[tamanhoEmail - 2] == 'o' && Email[tamanhoEmail - 3] == 'c' && Email[tamanhoEmail - 4] == '.') || (Email[tamanhoEmail - 1] == 'r' && Email[tamanhoEmail - 2] == 'b' && Email[tamanhoEmail - 3] == '.' && Email[tamanhoEmail - 4] == 'm' && Email[tamanhoEmail - 5] == 'o' && Email[tamanhoEmail - 6] == 'c' && Email[tamanhoEmail - 7] == '.')) && possuiEspaco == false && posicaoArrobaIn == true) {
                qtdEmailCorreto += 1;
                inp_email.style.borderColor = 'green';
                EmailDefinitivo = Email;
            } else {
                inp_email.style.borderColor = 'red';
                qtdEmailCorreto = 0;
            }

        }

    } else if (Email == '') {
        qtdEmailCorreto = 0;
        inp_email.style.borderColor = 'black';
    }

    //validação celular

    if (Celular != '' && CelularTeste != 11) {

        if (Celular.length == 11) {

            for (var contador = 0; contador < Celular.length; contador++) {

                var CelularCaractere = Celular[contador];

                if (lista_caracteres.includes(CelularCaractere) || isNaN(CelularCaractere) == true) {
                    CelularTeste -= 1;
                } else {
                    CelularTeste += 1;
                }

            }

        }else{
            inp_celular.style.borderColor = 'red';
            CelularTeste = 0;
        }

    } else if (Celular == '') {
        qtdCelularCorreto = 0;
        inp_celular.style.borderColor = 'black';
        CelularTeste = 0;
    }
    if(CelularTeste == 11){
        inp_celular.style.borderColor = 'green';
        CelularTeste = 0;
        qtdCelularCorreto += 1;
    }
    if(qtdCelularCorreto == 1){
        SalvarCelular = Celular;
        celularQTDCorreto += 1;
        alert('aqui dois')
    }
    
    // validação de Nome

    if (Nome != '') {
        var PossuiIsso = Nome.includes('1') || Nome.includes('2') || Nome.includes('3') || Nome.includes('4') || Nome.includes('5') || Nome.includes('6') || Nome.includes('7') || Nome.includes('8') || Nome.includes('9') || Nome.includes('0')

        if (PossuiIsso == false){
            qtdNomeCorreto += 1;
            inp_nome.style.borderColor = 'green';
            NomeDefinitivo = Nome;
        }else{
            qtdNomeCorreto = 0;
            inp_nome.style.borderColor = 'red';
        }
    }else if (Nome == ''){
        qtdNomeCorreto = 0;
        inp_nome.style.borderColor = 'black';
    }

    // validação Senha

    var tamanhoSenha = Senha.length;
    var maisculaSenha = Senha.toUpperCase();
    var minisculaSenha = Senha.toLowerCase();
    var possuiArroba = Senha.includes('@');
    var possuiHash = Senha.includes('#');
    var possuiCifrao = Senha.includes('$');
    var possuiPorcent = Senha.includes('%');
    var possuiE = Senha.includes('&');
    var possuiAsterisco = Senha.includes('*');
    var possuiInterrogacao = Senha.includes('!');
    div_ConfirmarSenha.innerHTML = ''



    var mensagem = '';
    var mensagemDois = '';

    var mensagemTres = '';
    var mensagemQuatro = '';


    if (tamanhoSenha >= 8) {
        mensagem = '<img src="../img/SimboloCertinho.png" style="width: 20px"> Tamanho Correto';
        qtdCorretoTam += 1;
    } else {
        mensagem = '<img src="../img/SimboloErrado.png" style="width: 20px">Tamanho Incorreto (pelo menos 8)';
        qtdCorretoTam = 0;
    }
    if (Senha != minisculaSenha) {
        mensagemDois = '<img src="../img/SimboloCertinho.png" style="width: 20px">Maiúscula';
        qtdCorretoMini += 1;
    } else {
        mensagemDois = '<img src="../img/SimboloErrado.png" style="width: 20px">Maiúscula ';
        qtdCorretoMini = 0;
    }
    if (Senha != maisculaSenha) {
        mensagemQuatro = `<img src="../img/SimboloCertinho.png" style="width: 20px"> Minúscula`;
        qtdCorretoMais += 1;
    } else {
        mensagemQuatro = '<img src="../img/SimboloErrado.png" style="width: 20px">Minúscula';
        qtdCorretoMais = 0;
    }
    if ((possuiArroba || possuiHash || possuiCifrao || possuiPorcent || possuiE || possuiAsterisco || possuiInterrogacao) && Senha != '') {
        mensagemTres = '<img src="../img/SimboloCertinho.png" style="width: 20px">Caractere especial (! @ # $ % & *)';
        qtdCorreto += 1;
    } else {
        mensagemTres = '<img src="../img/SimboloErrado.png" style="width: 20px">Caractere especial (! @ # $ % & *)';
        qtdCorreto = 0
    }
    div_validarSenha.innerHTML = `${mensagem} <br> ${mensagemDois} <br> ${mensagemQuatro} <br> ${mensagemTres}`
    
    if (Senha == '' || (qtdCorretoTam >= 1 && qtdCorreto >= 1 && qtdCorretoMini >= 1 && qtdCorretoMais >= 1)) {
        div_validarSenha.innerHTML = '';
    }

//validar senha correta

    if (confirmarSenha == Senha && confirmarSenha != '') {
        inp_confirmarSenha.style.borderColor = 'green';
        div_ConfirmarSenha.innerHTML = '';
        qtdSenhaIgual += 1;
    }else if (confirmarSenha != Senha && confirmarSenha != '') {
        inp_confirmarSenha.style.borderColor = 'red';
        qtdSenhaIgual = 0;
        div_ConfirmarSenha.innerHTML = `As senhas estão diferentes`
    }else if (confirmarSenha == '' && confirmarSenha == Senha){
        inp_confirmarSenha.style.borderColor = 'black';
        div_ConfirmarSenha.innerHTML = '';
    }else if (confirmarSenha == '' && confirmarSenha != Senha){
        inp_confirmarSenha.style.borderColor = 'red';
    }

    var AtivarBotao = qtdSenhaIgual >= 1 && qtdCorretoTam >= 1 && qtdCorretoMini >= 1 && qtdCorretoMais >= 1 &&  qtdCorreto >= 1 && qtdNomeCorreto >= 1 && celularQTDCorreto >= 1 && qtdEmailCorreto >= 1;

   
    
    if(AtivarBotao){
        btn_ativar.style.display = 'block'
        btn_ativar.style.cursor = 'pointer';
      
    }else {
        btn_ativar.style.display = 'none';
    }
  

}


function cadastrar(){


    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = inp_nome.value.toUpperCase();;
    var emailVar = inp_email.value;
    var senhaVar = inp_senha.value;
    var celularVar = inp_celular.value;;

    // Verificando se há algum campo em branco
    // if (
    //   nomeVar == "" ||
    //   emailVar == "" ||
    //   senhaVar == "" ||
    //   confirmacaoSenhaVar == "" ||
    //   celularVar == ""
    // ) {
    // //   cardErro.style.display = "block";
    // //   mensagem_erro.innerHTML =
    // //     "(Mensagem de erro para todos os campos em branco)";

    //   finalizarAguardar();
    //   return false;
    // } else {
    //   setInterval(sumirMensagem, 5000);
    // }

    // Verificando se o código de ativação é de alguma empresa cadastrada
    // for (let i = 0; i < listaEmpresasCadastradas.length; i++) {
    //   if (listaEmpresasCadastradas[i].codigo_ativacao == codigoVar) {
    //     idEmpresaVincular = listaEmpresasCadastradas[i].id
    //     console.log("Código de ativação válido.");
    //     break;
    //   } else {
    //     cardErro.style.display = "block";
    //     mensagem_erro.innerHTML = "(Mensagem de erro para código inválido)";
    //     finalizarAguardar();
    //   }
    // }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeVar,
        emailServer: emailVar,
        senhaServer: senhaVar,
        celularServer: celularVar        
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
        //   cardErro.style.display = "block";

        //   mensagem_erro.innerHTML =
            // "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

          setTimeout(() => {
            window.location = "TelaLogin.html";
          }, "2000");

          limparFormulario();
          finalizarAguardar();
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
      });

    return false;
  }

//   function sumirMensagem() {
//     // cardErro.style.display = "none";
//   }

