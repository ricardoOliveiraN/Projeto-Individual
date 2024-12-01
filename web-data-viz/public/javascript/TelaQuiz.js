var ListaAlternativas = [

    {
        Enunciado: '(1/10). Por quanto tempo você deixaria seu dinheiro investido?',
        Conservador: 'Mais de 5 anos',
        Moderado: 'De 3 a 5 anos',
        Agressivo: 'Menos de 3 anos'
    },
    {
        Enunciado: '(2/10). Qual tipo de investimento parece lhe agradar mais:',
        Conservador: 'Poupança e Tesouro Direto',
        Moderado: 'CDB e Fundo de Crédito Privado',
        Agressivo: 'Renda Variável'
    },
    {
        Enunciado: '(3/10). Com o que você mais se preocupar ao investir seu dinheiro?',
        Conservador: 'Evitar perder dinheiro, mesmo que as as chances de lucro sejam altas',
        Moderado: 'Foco em ter lucro a longo prazo, equilibrando ganhos e perdas de dinheiro',
        Agressivo: 'Foco em ter lucro a longo prazo, mas sem se preocupar tanto com as oscilações no valor dos investimentos'
    },
    {
        Enunciado: '(4/10). Caso houvesse uma grande oscilação no mercado de ações, fazendo com que as ações caíssem em 30%, qual seria sua decisão?',
        Conservador: 'Vender todas as ações que possuo',
        Moderado: 'Venderia parte das ações que possuo',
        Agressivo: 'Iria aproveitar para comprar ações por um preço mais baixo'
    },
    {
        Enunciado: '(5/10). Um colega seu chega até você com uma oportunidade de "ouro", entretanto há riscos altos envolvido, qual seria sua decisão?',
        Conservador: 'Não irei participar, pois há muito risco',
        Moderado: 'Aceito participar da oportunidade, mas com cautela',
        Agressivo: 'Irei investir o máximo possível, pois quero aproveitar o retorno potencial'
    },
    {
        Enunciado: '(6/10). Quando você houve uma notícia sobre crises financeiras, qual é sua reação?',
        Conservador: 'Eu fico preocupado e penso em proteger o meu dinheiro',
        Moderado: 'Fico atento sobre como o mercado irá se comportar e, assim, tomo uma decisão',
        Agressivo: 'Vejo como uma oportunidade'
    },
    {
        Enunciado: '(7/10). Você investiria em um fundo que promete retorno em 5 anos, mas que não garante retorno financeiro?',
        Conservador: 'Eu não investiria, prefiro ter a certeza quando invisto',
        Moderado: 'Eu iria procurar saber se o risco é moderado e, se for bem explicado, eu iria investir',
        Agressivo: 'Não vejo problema em assumir riscos para obter lucros maiores a longo prazo'
    },
    {
        Enunciado: '(8/10). Você ja pensou em investir em mercados internacionais?',
        Conservador: 'Não, o mercado nacional é mais seguro',
        Moderado: 'Eu considero investir no mercado internacional, assim consigo diversificar mais minha carteira',
        Agressivo: 'O mercado internacional é uma ótima oportunidade para eu obter maiores lucros, então, com certeza, eu penso'
    },
    {
        Enunciado: '(9/10). Você estaria disposto em investir em uma startup?',
        Conservador: 'Por ser um investimento arriscado, devido a dificuldade dessas empresas se consolidarem no mercado, eu não investiria',
        Moderado: 'Utilizaria apenas uma parte pequena do meu capital para investir',
        Agressivo: 'Com certeza, apesar dos riscos, startups têm muito potencial de retorno financeiro'
    },
    {
        Enunciado: '(10/10). O que você considera um bom investimento?',
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
                backgroundColor: '#ffc300',
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


function inserirNoUser(dado) {


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

function voltarQuiz() {
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


/*Quiz Dois*/


var ListaAlternativasDois = [

    {
        Enunciado: '(1/10). Como o feedback pode ajudar no desenvolvimento dos colaboradores?',
        R1: 'Ele promove a competição interna entre os membros da equipe.',
        R2: 'Ele aponta áreas de melhoria e reforça comportamentos positivos. ',
        R3: 'Ele reduz o volume de tarefas a serem realizadas',
        R4: ' Ele garante aumentos salariais automáticos.'
    },
    {
        Enunciado: '(2/10). Qual é o maior bem que há em uma empresa?',
        R1: 'O capital financeiro disponível.',
        R2: 'O patrimônio físico e equipamentos.',
        R3: 'As pessoas que fazem parte da organização.',
        R4: 'As estratégias de marketing adotadas.'
    },
    {
        Enunciado: '(3/10). O que significa o conceito dos "4 Ps do Marketing"?',
        R1: 'Planejamento, Pessoas, Processos e Produto.',
        R2: 'Produto, Preço, Praça e Promoção.',
        R3: 'Preço, Público, Propaganda e Pontualidade.',
        R4: 'Pessoas, Propaganda, Planejamento e Previsão.'
    },
    {
        Enunciado: '(4/10). Qual a importância de conhecer a jornada do cliente?',
        R1: 'Identificar apenas as vendas feitas por recomendação.',
        R2: 'Controlar os custos de aquisição de produtos.',
        R3: 'Aumentar o estoque de produtos para clientes recorrentes.',
        R4: 'Entender cada etapa que o cliente percorre até a compra. '
    },
    {
        Enunciado: '(5/10). Qual a diferença entre cultura organizacional e clima organizacional?',
        R1: 'Cultura é sobre o ambiente físico, e clima é sobre regras da empresa.',
        R2: 'Cultura envolve valores e comportamentos, e clima reflete a percepção dos colaboradores.',
        R3: 'Cultura trata da relação entre líderes e funcionários, enquanto clima envolve apenas clientes.',
        R4: 'Não há diferença entre os dois termos.'
    },
    {
        Enunciado: '(6/10). O que são custos fixos e variáveis?',
        R1: 'Custos fixos são obrigatórios por lei, e variáveis dependem do setor.',
        R2: 'Custos fixos não variam com a produção, e variáveis mudam conforme a atividade.',
        R3: 'Custos fixos dependem do mercado, e variáveis dependem do cliente.',
        R4: 'Custos fixos são evitáveis, enquanto variáveis são sempre pagos.'
    },
    {
        Enunciado: '(7/10). O que é margem de lucro e como é calculada?',
        R1: 'É o valor recebido pelo empreendedor; é calculada dividindo o lucro pelo preço de venda.',
        R2: 'É o montante bruto da receita; é calculada subtraindo despesas operacionais.',
        R3: 'É o custo total da empresa; é calculada multiplicando as vendas pelo preço unitário.',
        R4: 'É o valor pago aos funcionários; é calculada com base no total do faturamento.'
    },
    {
        Enunciado: '(8/10). O que significa o termo "MVP" (Produto Mínimo Viável)?',
        R1: 'Um produto finalizado pronto para o mercado.',
        R2: 'Um protótipo com características mínimas para testar viabilidade. ',
        R3: 'Uma lista de ideias de produto em fase inicial.',
        R4: 'Uma estratégia de marketing para atingir o público-alvo.'
    },
    {
        Enunciado: '(9/10). Qual é o objetivo principal de uma análise SWOT?',
        R1: 'Diagnosticar forças, fraquezas, oportunidades e ameaças.',
        R2: 'Identificar oportunidades e reduzir custos operacionais.',
        R3: 'Planejar estratégias de vendas.',
        R4: 'Avaliar exclusivamente as condições do mercado externo.'
    },
    {
        Enunciado: '(10/10). Por que é importante estabelecer metas SMART?',
        R1: 'Para garantir que a empresa tenha metas genéricas.',
        R2: 'Para que os funcionários saibam que são avaliados pela equipe de vendas.',
        R3: 'Para facilitar o alcance de objetivos claros, específicos e mensuráveis.',
        R4: 'Para evitar que mudanças sejam feitas no planejamento estratégico.'
    }

]

function chamarQuizDois() {



    div_Quizz.style.display = 'none';
    div_Quizz2.style.display = 'none';
    div_Funndo.style.display = 'flex';

    alternativaAtual = ListaAlternativasDois[indexDois];

    div_Funndo.innerHTML = `
    
        <div class="div_PerguntasQuiz" id="div_Perguntas">
                    
            <div class="div_Titulo2">

                <h1>${alternativaAtual.Enunciado}</h1>

            </div>

            <div class="div_Alternativas">

                <span>
                    <input type="radio" id="primeiraOpcao" name="option" value='1'/>
                    <label for="primeiraOpcao" id="labelOpcaoUm">${alternativaAtual.R1}</label>
                </span>
                <span>
                    <input type="radio" id="segundaOpcao" name="option" value='1'/>
                    <label for="segundaOpcao" id="labelOpcaoDois">${alternativaAtual.R2}</label>
                </span>
                <span>
                    <input type="radio" id="terceiraOpcao" name="option" value='1'/>
                    <label for="terceiraOpcao" id="labelOpcaoTres">${alternativaAtual.R3}</label>
                </span>
                <span>
                    <input type="radio" id="quartaOpcao" name="option" value='1'/>
                    <label for="quartaOpcao" id="labelOpcaoQuatro">${alternativaAtual.R4}</label>
                </span>
            </div>
            <div class="div_Botao"><button onclick="avançarDois()">Avançar</button></div>
        </div>
        
    `

}

var lista_RespostaDois = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var indexDois = 0;

function avançarDois() {

    var comResposta = primeiraOpcao.checked || segundaOpcao.checked || terceiraOpcao.checked || quartaOpcao.checked;



    if (comResposta && indexDois <= 10) {

        if (indexDois == 0 && segundaOpcao.checked) { //Q1

            lista_RespostaDois[0] += Number(segundaOpcao.value);

        } else if (indexDois == 1 && terceiraOpcao.checked) {//Q2

            lista_RespostaDois[1] += Number(terceiraOpcao.value);

        } else if (indexDois == 2 && segundaOpcao.checked) {//Q3

            lista_RespostaDois[2] += Number(segundaOpcao.value);

        } else if (indexDois == 3 && quartaOpcao.checked) {//Q4

            lista_RespostaDois[3] += Number(quartaOpcao.value);

        } else if (indexDois == 4 && segundaOpcao.checked) {//Q5

            lista_RespostaDois[4] += Number(segundaOpcao.value);

        } else if (indexDois == 5 && segundaOpcao.checked) {//Q6

            lista_RespostaDois[5] += Number(segundaOpcao.value);

        } else if (indexDois == 6 && primeiraOpcao.checked) {//Q7

            lista_RespostaDois[6] += Number(primeiraOpcao.value);

        } else if (indexDois == 7 && segundaOpcao.checked) {//Q8

            lista_RespostaDois[7] += Number(segundaOpcao.value);

        } else if (indexDois == 8 && primeiraOpcao.checked) {//Q9

            lista_RespostaDois[8] += Number(primeiraOpcao.value);

        } else if (indexDois == 9 && terceiraOpcao.checked) {//Q10

            lista_RespostaDois[9] += Number(terceiraOpcao.value);

        }

        indexDois++;

        if (indexDois == 10) {

            var idUsuarioVar = sessionStorage.ID_USUARIO;
            var q1Var = lista_RespostaDois[0];
            var q2Var = lista_RespostaDois[1];
            var q3Var = lista_RespostaDois[2];
            var q4Var = lista_RespostaDois[3];
            var q5Var = lista_RespostaDois[4];
            var q6Var = lista_RespostaDois[5];
            var q7Var = lista_RespostaDois[6];
            var q8Var = lista_RespostaDois[7];
            var q9Var = lista_RespostaDois[8];
            var q10Var = lista_RespostaDois[9];

            fetch("/quiz/quizdois", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    idUsuarioServer: idUsuarioVar,
                    q1Server: q1Var,
                    q2Server: q2Var,
                    q3Server: q3Var,
                    q4Server: q4Var,
                    q5Server: q5Var,
                    q6Server: q6Var,
                    q7Server: q7Var,
                    q8Server: q8Var,
                    q9Server: q9Var,
                    q10Server: q10Var
                }),
            })
                .then(function (resposta) {
                    console.log("resposta: ", resposta);

                    if (resposta.ok) {

                        div_Funndo.style.display = 'none';
                        div_FundoDash2.style.display = 'flex';
                        obterKpi();
                        obterdashBoardDois();


                    } else {
                        throw "Houve um erro no avançar um";
                    }
                })
                .catch(function (resposta) {
                    console.log(`#ERRO: ${resposta}`);
                });

            return false;

        } else {



            alternativaAtual = ListaAlternativasDois[indexDois];

            div_Funndo.innerHTML = `
        
        <div class="div_PerguntasQuiz" id="div_Perguntas">
                    
            <div class="div_Titulo2">

                <h1>${alternativaAtual.Enunciado}</h1>

            </div>

            <div class="div_Alternativas">

                <span>
                    <input type="radio" id="primeiraOpcao" name="option" value="1"/>
                    <label for="primeiraOpcao" id="labelOpcaoUm">${alternativaAtual.R1}</label>
                </span>
                <span>
                    <input type="radio" id="segundaOpcao" name="option" value="1"/>
                    <label for="segundaOpcao" id="labelOpcaoDois">${alternativaAtual.R2}</label>
                </span>
                <span>
                    <input type="radio" id="terceiraOpcao" name="option" value="1"/>
                    <label for="terceiraOpcao" id="labelOpcaoTres">${alternativaAtual.R3}</label>
                </span>
                <span>
                    <input type="radio" id="quartaOpcao" name="option" value="1"/>
                    <label for="quartaOpcao" id="labelOpcaoQuatro">${alternativaAtual.R4}</label>
                </span>
            </div>
            <div class="div_Botao"><button onclick="avançarDois()">Avançar</button></div>
        </div>
        
        `
        }
    }

}

function obterKpi() {

    var fkUser = sessionStorage.ID_USUARIO;

    fetch(`/quiz/KPI/${fkUser}`).then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {

                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                kpi_requisitos.innerHTML = `(${resposta[0].total_acertos}/10)`

                
                dataBB.push(resposta[0].total_acertos);
                dataBB.push(resposta[0].total_erros);


                plotarGraficoRosca();

            });
        } else {
            throw ('Houve um erro na API! obterdados');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });


}
var dataBB = [];
function plotarGraficoRosca() {
    const labelsB = [
        'Acertos',
        'Erros',
    ];



    const dataB = {
        labels: labelsB,
        datasets: [{
            label: 'Requisitos',
            backgroundColor: [
                'rgb(95, 155, 99)',
                'rgb(179, 53, 53)',
            ],
            borderColor: [
                'rgb(0, 0, 0, 0.2)',
                'rgb(0, 0, 0, 0.2)',
            ],
            data: dataBB
        }]

    };



    const configB = {
        type: 'doughnut',
        data: dataB,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Total de Acertos x Total de Erros',
                    color: '#000000',
                    font: {
                        size: 16,
                    }
                },
                legend: {
                    position: 'bottom',

                    labels: {
                        boxWidth: 20,
                        color: '#000'
                    }
                }
            }
        }
    }

    const myChart1 = new Chart(
        document.getElementById('myChartD'),
        configB
    )
}
function obterdashBoardDois() {


    fetch(`/quiz/dashBordDois`).then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {

                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                for (let index = 0; index < resposta.length; index++) {
                    const publico = resposta[index];
                    dadosQuatro[0][0] = publico.Q1_acertos;
                    dadosQuatro[0][1] = publico.Q2_acertos;
                    dadosQuatro[0][2] = publico.Q3_acertos;
                    dadosQuatro[0][3] = publico.Q4_acertos;
                    dadosQuatro[0][4] = publico.Q5_acertos;
                    dadosQuatro[0][5] = publico.Q6_acertos;
                    dadosQuatro[0][6] = publico.Q7_acertos;
                    dadosQuatro[0][7] = publico.Q8_acertos;
                    dadosQuatro[0][8] = publico.Q9_acertos;
                    dadosQuatro[0][9] = publico.Q10_acertos;
                }
                plotarGraficoBarra()


            });
        } else {
            throw ('Houve um erro na API! obterdados');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });
}

var dadosQuatro = [

    dadosTotais = [],
    dadosVocê = lista_RespostaDois

]
var labelCC = ['Questão 1', 'Questão 2', 'Questão 3', 'Questão 4', 'Questão 5', 'Questão 6', 'Questão 7', 'Questão 8', 'Questão 9', 'Questão 10']

function plotarGraficoBarra() {

    const dataE = {
        labels: labelCC,
        datasets: [{
            label: 'Total',
            data: dadosQuatro[0],
            borderColor: '#00008080',
            backgroundColor: '#000080e3',
        },
        {
            label: 'Você',
            data: dadosQuatro[1],
            borderColor: '#8000219c',
            backgroundColor: '#ffc300',
        },
        ]
    };


    const configE = {
        type: 'bar',
        data: dataE,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Total de Acertos x Suas Respostas',
                    color: 'black',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    labels: {
                        color: 'black'
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        color: 'black'
                    },
                    ticks: {
                        color: 'black'
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'black'
                    },
                    ticks: {
                        color: 'black'
                    }
                }
            }
        }
    };

    const myChart8 = new Chart(
        document.getElementById('myChartE'),
        configE
    )
}


function voltarQuizDois() {


    window.location = "TelaQuiz.html";


}
/*Gráficos e KPIS

- acerto/total
- porcentagem acerto x porcentaem erro - select no count (q1)
- gráfico de barra (resposta de todos x questão)
- gráfico de pessoas que mais acertam

*/