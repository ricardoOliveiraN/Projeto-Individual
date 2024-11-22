var ListaAlternativas = [

    {
        Enunciado: 'Por quanto tempo você deixaria seu dinheiro investido?',
        Conservador: 'Menos de 3 anos',
        Moderado: 'De 3 a 5 anos',
        Agressivo: 'Mais de 5 anos'
    },
    {
        Enunciado: 'Qual tipo de investimento parece lhe agradar mais:',
        Conservador: 'Poupança e Tesouro Direto',
        Moderado: 'CDB e Fundo de Crédito Privado',
        Agressivo: 'Renda Variável'
    },
    {
        Enunciado: 'Com o que você mais se preocupar ao investir seu dinheiro?',
        Conservador: 'Evitar perder dinheiro, mesmo que as perdas sejam baixas',
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
        Agressivo: 'Algo com muito potencial lucrativo, masmo que possua riscos envolvidos'
    }

]

var index = 0;

function chamarQuizUm() {



    div_Quizz.style.display = 'none';
    div_Quizz2.style.display = 'none';
    div_Funndo.style.display = 'flex';

    alternativaAtual = ListaAlternativas[index];

    div_Funndo.innerHTML = `
    
        <div class="div_PerguntasQuiz" id="div_Perguntas">
                    
            <div class="div_Titulo2">

                <h1>${alternativaAtual.Enunciado}</h1>

            </div>

            <div class="div_Alternativas">

                <span>
                    <input type="radio" id="primeiraOpcao" name="option" value="A"/>
                    <label for="primeiraOpcao" id="labelOpcaoUm">${alternativaAtual.Conservador}</label>
                </span>
                <span>
                    <input type="radio" id="segundaOpcao" name="option" value="B"/>
                    <label for="segundaOpcao" id="labelOpcaoDois">${alternativaAtual.Moderado}</label>
                </span>
                <span>
                    <input type="radio" id="terceiraOpcao" name="option" value="C"/>
                    <label for="terceiraOpcao" id="labelOpcaoTres">${alternativaAtual.Agressivo}</label>
                </span>
            </div>
            <div class="div_Botao"><button onclick="avançar()">Avançar</button></div>
        </div>
        
    `

}



function avançar() {

    var comResposta = primeiraOpcao.checked || segundaOpcao.checked || terceiraOpcao.checked;

    if (comResposta && index <= 10) {

        index++;

        if (index == 10) {
            alert('foi')
        }

        alternativaAtual = ListaAlternativas[index];

        div_Funndo.innerHTML = `
        
        <div class="div_PerguntasQuiz" id="div_Perguntas">
                    
            <div class="div_Titulo2">

                <h1>${alternativaAtual.Enunciado}</h1>

            </div>

            <div class="div_Alternativas">

                <span>
                    <input type="radio" id="primeiraOpcao" name="option" value="A"/>
                    <label for="primeiraOpcao" id="labelOpcaoUm">${alternativaAtual.Conservador}</label>
                </span>
                <span>
                    <input type="radio" id="segundaOpcao" name="option" value="B"/>
                    <label for="segundaOpcao" id="labelOpcaoDois">${alternativaAtual.Moderado}</label>
                </span>
                <span>
                    <input type="radio" id="terceiraOpcao" name="option" value="C"/>
                    <label for="terceiraOpcao" id="labelOpcaoTres">${alternativaAtual.Agressivo}</label>
                </span>
            </div>
            <div class="div_Botao"><button onclick="avançar()">Avançar</button></div>
        </div>
        
        `
        
    }

}