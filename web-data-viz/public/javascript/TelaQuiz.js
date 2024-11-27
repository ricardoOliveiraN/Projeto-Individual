var ListaAlternativas = [

    {
        Enunciado: 'Por quanto tempo você deixaria seu dinheiro investido?',
        Conservador: 'Mais de 5 anos',
        Moderado: 'De 3 a 5 anos',
        Agressivo: 'Menos de 3 anos'
    },
    {
        Enunciado: 'Qual tipo de investimento parece lhe agradar mais:',
        Conservador: 'Poupança e Tesouro Direto',
        Moderado: 'CDB e Fundo de Crédito Privado',
        Agressivo: 'Renda Variável'
    },
    {
        Enunciado: 'Com o que você mais se preocupar ao investir seu dinheiro?',
        Conservador: 'Evitar perder dinheiro, mesmo que as as chances de lucro sejam altas',
        Moderado: 'Foco em ter lucro a longo prazo, equilibrando ganhos e perdas de dinheiro',
        Agressivo: 'Foco em ter lucro a longo prazo, mas sem se preocupar tanto com as oscilações no valor dos investimentos'
    },
    {
        Enunciado: 'Caso houvesse uma grande oscilação no mercado de ações, fazendo com que as ações caíssem em 30%, qual seria sua decisão?',
        Conservador: 'Vender todas as ações que possuo',
        Moderado: 'Venderia parte das ações que possuo',
        Agressivo: 'Iria aproveitar para comprar ações por um preço mais baixo'
    },
    {
        Enunciado: 'Um colega seu chega até você com uma oportunidade de "ouro", entretanto há riscos altos envolvido, qual seria sua decisão?',
        Conservador: 'Não irei participar, pois há muito risco',
        Moderado: 'Aceito participar da oportunidade, mas com cautela',
        Agressivo: 'Irei investir o máximo possível, pois quero aproveitar o retorno potencial'
    },
    {
        Enunciado: 'Quando você houve uma notícia sobre crises financeiras, qual é sua reação?',
        Conservador: 'Eu fico preocupado e penso em proteger o meu dinheiro',
        Moderado: 'Fico atento sobre como o mercado irá se comportar e, assim, tomo uma decisão',
        Agressivo: 'Vejo como uma oportunidade'
    },
    {
        Enunciado: 'Você investiria em um fundo que promete retorno em 5 anos, mas que não garante retorno financeiro?',
        Conservador: 'Eu não investiria, prefiro ter a certeza quando invisto',
        Moderado: 'Eu iria procurar saber se o risco é moderado e, se for bem explicado, eu iria investir',
        Agressivo: 'Não vejo problema em assumir riscos para obter lucros maiores a longo prazo'
    },
    {
        Enunciado: 'Você ja pensou em investir em mercados internacionais?',
        Conservador: 'Não, o mercado nacional é mais seguro',
        Moderado: 'Eu considero investir no mercado internacional, assim consigo diversificar mais minha carteira',
        Agressivo: 'O mercado internacional é uma ótima oportunidade para eu obter maiores lucros, então, com certeza, eu penso'
    },
    {
        Enunciado: 'Você estaria disposto em investir em uma startup?',
        Conservador: 'Por ser um investimento arriscado, devido a dificuldade dessas empresas se consolidarem no mercado, eu não investiria',
        Moderado: 'Utilizaria apenas uma parte pequena do meu capital para investir',
        Agressivo: 'Com certeza, apesar dos riscos, startups têm muito potencial de retorno financeiro'
    },
    {
        Enunciado: 'O que você considera um bom investimento?',
        Conservador: 'Algo que ofereça retorno financeiro, mas com segurança e estabilidade',
        Moderado: 'Algo que combine retorno a longo prazo com risco moderado',
        Agressivo: 'Algo com muito potencial lucrativo, mesmo que possua riscos envolvidos'
    }

]

var lista_definicoes = [

    {
        Titulo: 'Conservador',
        Definicao: 'Com base nas suas respostas, o seu perfil atual é predominantemente conservador. Isso significa que você possui menos tolerância para possíveis riscos, ou seja, você prefere optar por empreendimentos e investimentos mais seguros e com maior estabilidade.',
        PS: 'Vale ressaltar que o seu perfil de investidor é altamente adaptável para o momento específico da sua vida, portanto, hoje você que é conservador pode se tornar uma pessoa com perfil agressivo no futuro.'

    },
    {
        Titulo: 'Moderado',
        Definicao: 'Com base nas suas respostas, o seu perfil atual é predominantemente moderado. Isso significa que você possui uma maior adaptabilidade, ou seja, você está disposto a assumir pequenos riscos para aumentar seus ganhos, mas nunca deixando de lado a seguança e estabilidade.',
        PS: 'Vale ressaltar que o seu perfil de investidor é altamente adaptável para o momento específico da sua vida, portanto, hoje você que é moderado pode se tornar uma pessoa com perfil agressivo no futuro.'

    },
    {
        Titulo: 'Agressivo',
        Definicao: 'Com base nas suas respostas, o seu perfil atual é predominantemente agressivo. Isso significa que você possui uma maior tolerâncias para os possíveis riscos existentes nos investimentos e empreendimento, uma vez que obter altos retornos financeiros é algo que você deseja.',
        PS: 'Vale ressaltar que o seu perfil de investidor é altamente adaptável para o momento específico da sua vida, portanto, hoje você que é agressivo pode se tornar uma pessoa com perfil moderado no futuro.'

    }


]

let lista_RespostasUm = [0, 0, 0];;

var indexUm = 0;

function chamarQuizUm() {



    div_Quizz.style.display = 'none';
    div_Quizz2.style.display = 'none';
    div_Funndo.style.display = 'flex';

    alternativaAtual = ListaAlternativas[indexUm];

    div_Funndo.innerHTML = `
    
        <div class="div_PerguntasQuiz" id="div_Perguntas">
                    
            <div class="div_Titulo2">

                <h1>${alternativaAtual.Enunciado}</h1>

            </div>

            <div class="div_Alternativas">

                <span>
                    <input type="radio" id="primeiraOpcao" name="option" value='1'/>
                    <label for="primeiraOpcao" id="labelOpcaoUm">${alternativaAtual.Conservador}</label>
                </span>
                <span>
                    <input type="radio" id="segundaOpcao" name="option" value='1'/>
                    <label for="segundaOpcao" id="labelOpcaoDois">${alternativaAtual.Moderado}</label>
                </span>
                <span>
                    <input type="radio" id="terceiraOpcao" name="option" value='1'/>
                    <label for="terceiraOpcao" id="labelOpcaoTres">${alternativaAtual.Agressivo}</label>
                </span>
            </div>
            <div class="div_Botao"><button onclick="avançarUm()">Avançar</button></div>
        </div>
        
    `

}



function avançarUm() {

    var comResposta = primeiraOpcao.checked || segundaOpcao.checked || terceiraOpcao.checked;



    if (comResposta && indexUm <= 10) {

        if (primeiraOpcao.checked) {
            lista_RespostasUm[0] += Number(primeiraOpcao.value);
        } else if (segundaOpcao.checked) {
            lista_RespostasUm[1] += Number(segundaOpcao.value);
        } else if (terceiraOpcao.checked) {
            lista_RespostasUm[2] += Number(terceiraOpcao.value);
        }

        indexUm++;

        if (indexUm == 10) {
           
            var idUsuarioVar = sessionStorage.ID_USUARIO;
            var q1Var = lista_RespostasUm[0];
            var q2Var = lista_RespostasUm[1];
            var q3Var = lista_RespostasUm[2];

            fetch("/quiz/quizum", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    idUsuarioServer: idUsuarioVar,
                    q1Server: q1Var,
                    q2Server: q2Var,
                    q3Server: q3Var
                }),
            })
                .then(function (resposta) {
                    console.log("resposta: ", resposta);

                    if (resposta.ok) {

                        div_Funndo.style.display = 'none';
                        div_FundoDash.style.display = 'flex';
                        obterdashBoardUm();

                    } else {
                        throw "Houve um erro no avançar um";
                    }
                })
                .catch(function (resposta) {
                    console.log(`#ERRO: ${resposta}`);
                });

            return false;

        } else {



            alternativaAtual = ListaAlternativas[indexUm];

            div_Funndo.innerHTML = `
        
        <div class="div_PerguntasQuiz" id="div_Perguntas">
                    
            <div class="div_Titulo2">

                <h1>${alternativaAtual.Enunciado}</h1>

            </div>

            <div class="div_Alternativas">

                <span>
                    <input type="radio" id="primeiraOpcao" name="option" value="1"/>
                    <label for="primeiraOpcao" id="labelOpcaoUm">${alternativaAtual.Conservador}</label>
                </span>
                <span>
                    <input type="radio" id="segundaOpcao" name="option" value="1"/>
                    <label for="segundaOpcao" id="labelOpcaoDois">${alternativaAtual.Moderado}</label>
                </span>
                <span>
                    <input type="radio" id="terceiraOpcao" name="option" value="1"/>
                    <label for="terceiraOpcao" id="labelOpcaoTres">${alternativaAtual.Agressivo}</label>
                </span>
            </div>
            <div class="div_Botao"><button onclick="avançarUm()">Avançar</button></div>
        </div>
        
        `
        }
    }

}

function obterdashBoardUm() {

    var fkUser = sessionStorage.ID_USUARIO;

    fetch(`/quiz/dadosUm/${fkUser}`).then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {

                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                var qC = resposta[0].qtdConservador;
                var qM = resposta[0].qtdModerado;
                var qA = resposta[0].qtdAgressivo;

                plotardashBoardUm(qC, qM, qA);

            });
        } else {
            throw ('Houve um erro na API! obterdados');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });



}

function plotardashBoardUm(qC, qM, qA) {

    var qtdConservador = qC;
    var qtdModerado = qM;
    var qtdAgressivo = qA;

    var agressivo = (qtdConservador == 0 && qtdAgressivo > 6) || (qtdModerado == 0 && qtdAgressivo > 6) || (qtdConservador < 4 && qtdAgressivo > 4);
    var conservador = qtdConservador >= 6;

    if (conservador) {
        div_DefinicaoPerfilUm.innerHTML = `

         <div class="div_Titulo">

         <div class="div_Botao3">
         <button onclick = "voltarQuiz()">Voltar</button>
         </div>
            <div class = "div_Titulo5"><h1>${lista_definicoes[0].Titulo}</h1></div>
        </div>
        <div class="div_Paragrafo">

            <p>${lista_definicoes[0].Definicao}</p>
            <p>${lista_definicoes[0].PS}</p>

        </div>

        `

        inserirNoUser(lista_definicoes[0].Titulo)

    } else if (agressivo) {

        div_DefinicaoPerfilUm.innerHTML = `

        <div class="div_Titulo">

            <div class="div_Botao3">
            <button onclick = "voltarQuiz()">Voltar</button>
            </div>
           <div class = "div_Titulo5"><h1>${lista_definicoes[2].Titulo}</h1></div>

       </div>
       <div class="div_Paragrafo">

           <p>${lista_definicoes[2].Definicao}</p>
           <p>${lista_definicoes[2].PS}</p>

       </div>

       `

       inserirNoUser(lista_definicoes[2].Titulo)

    } else {
        
        div_DefinicaoPerfilUm.innerHTML = `
    
        <div class="div_Titulo">
    
            <div class="div_Botao3">
                <button onclick = "voltarQuiz()"> Voltar </button>
            </div>
           <div class = "div_Titulo5"><h1>${lista_definicoes[1].Titulo}</h1></div>
       </div>
       <div class="div_Paragrafo">
    
           <p>${lista_definicoes[1].Definicao}</p>
           <p>${lista_definicoes[1].PS}</p>
    
       </div>
    
       `

       inserirNoUser(lista_definicoes[1].Titulo)

    }

    div_qC.innerHTML = `${qtdConservador * 10}%`;
    div_qM.innerHTML = `${qtdModerado * 10}%`;
    div_qA.innerHTML = `${qtdAgressivo * 10}%`;

    const ctx = document.getElementById('myChart');

    const labels = ['Renda Fixa', 'Renda Variável', 'FIIs', 'Criptomoeda']

    const dados = [

        dadosUm = [80, 10, 10, 0],
        dadosDois = [50, 30, 15, 5],
        dadosTres = [20, 50, 20, 10]

    ]

    const data = {
        labels: labels,
        datasets: [

            {
                label: 'Conservador',
                data: dados[0],
                borderColor: '#00008080',
                backgroundColor: '#000080e3',
            },
            {
                label: 'Moderado',
                data: dados[1],
                borderColor: '#8000219c',
                backgroundColor: '#ffc300' ,
            },
            {
                label: 'Agressivo',
                data: dados[2],
                borderColor: '#d4af37',
                backgroundColor: '#800021',
            }
        ]
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: false,
                    min: 0,
                    max: 100
                }
            },

            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Comparação de Perfis - Exemplos de Investimentos'
                }
            }
        }
    }
    );


}


function inserirNoUser(dado){   


    var PerfilVar = dado;
    var idUsuarioVar = sessionStorage.ID_USUARIO;


    fetch("/quiz/inserUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idUsuarioServer: idUsuarioVar,
          perfilServer: PerfilVar
        }),
      })
        .then(function (resposta) {
          console.log("resposta: ", resposta);
    
          if (resposta.ok) {

            console.log('deu certo')
    
          } else {
            throw "Houve um erro ao tentar realizar o cadastro! 1";
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
        });
    
      return false;


}

function voltarQuiz(){
    var idUsuarioVar = sessionStorage.ID_USUARIO;

    

    fetch("/quiz/delquiz", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idUsuarioServer: idUsuarioVar
        }),
      })
        .then(function (resposta) {
          console.log("resposta: ", resposta);
    
          if (resposta.ok) {
    
            window.location = "TelaQuiz.html";
    
          } else {
            throw "Houve um erro ao tentar realizar o cadastro! 1";
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
        });
    
      return false;
}