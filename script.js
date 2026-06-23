const perguntas = {
  facil: [
    {
      pergunta: "Qual é o nome do planeta onde ocorre Avatar?",
      opcoes: ["Pandora", "Terra", "Marte", "Titan"],
      correta: 0,
    },
    {
      pergunta: "Quem dirigiu Avatar?",
      opcoes: [
        "Steven Spielberg",
        "James Cameron",
          "Christopher Nolan",
        
        "Ridley Scott",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a raça nativa de Pandora?",
      opcoes: ["Navi", "Na'vi", "Kree", "Asgardianos"],
      correta: 1,
    },
    {
      pergunta: "Qual é o nome do protagonista?",
      opcoes: ["Jake Sully", "Miles Quaritch", "Norm Spellman", "Tsu'tey"],
      correta: 0,
    },
    {
      pergunta: "Qual a cor predominante dos Na'vi?",
      opcoes: ["Verde", "Azul", "Vermelho", "Roxo"],
      correta: 1,
    },
  ],

  medio: [
    {
      pergunta: "Qual criatura voadora Jake doma?",
      opcoes: ["Ikran", "Tulkun", "Thanator", "Direhorse"],
      correta: 0,
    },
    {
      pergunta: "Quem é a companheira de Jake?",
      opcoes: ["Kiri", "Neytiri", "Ronal", "Mo'at"],
      correta: 1,
    },
    {
      pergunta: "O que é Eywa?",
      opcoes: [
        "Uma árvore",
        "Uma arma",
        "A consciência espiritual de Pandora",
        "Um animal",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é o recurso mineral procurado pelos humanos?",
      opcoes: ["Adamantium", "Unobtanium", "Vibranium", "Kryptonite"],
      correta: 1,
    },
    {
      pergunta: "Qual é o sobrenome de Jake?",
      opcoes: ["Smith", "Cameron", "Sully", "Parker"],
      correta: 2,
    },
    {
      pergunta: "Quem lidera os militares humanos?",
      opcoes: ["Parker", "Quaritch", "Norm", "Max"],
      correta: 1,
    },
    {
      pergunta: "Avatar foi lançado em que ano?",
      opcoes: ["2005", "2007", "2009", "2011"],
      correta: 2,
    },
    {
      pergunta: "Qual é a altura média dos Na'vi?",
      opcoes: ["2 metros", "3 metros", "4 metros", "5 metros"],
      correta: 1,
    },
    {
      pergunta: "Quem é a mãe de Neytiri?",
      opcoes: ["Ronal", "Kiri", "Mo'at", "Tsireya"],
      correta: 2,
    },
    {
      pergunta: "Avatar: O Caminho da Água foi lançado em?",
      opcoes: ["2020", "2021", "2022", "2023"],
      correta: 2,
    },
  ],

  dificil: [
    {
      pergunta: "Qual é o nome da tribo de Neytiri?",
      opcoes: ["Metkayina", "Omatikaya", "Ash Clan", "Mangkwan"],
      correta: 1,
    },
    {
      pergunta: "Quem interpreta Jake Sully?",
      opcoes: ["Sam Worthington", "Tom Holland", "Chris Pratt", "Matt Damon"],
      correta: 0,
    },
    {
      pergunta: "Quem interpreta Neytiri?",
      opcoes: [
        "Scarlett Johansson",
        "Sigourney Weaver",
        "Zoe Saldaña",
        "Emily Blunt",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual criatura é considerada um dos predadores mais perigosos?",
      opcoes: ["Tulkun", "Thanator", "Ikran", "Prolemuris"],
      correta: 1,
    },
    {
      pergunta: "Quem interpreta o Coronel Quaritch?",
      opcoes: ["Stephen Lang", "Vin Diesel", "Jason Momoa", "Josh Brolin"],
      correta: 0,
    },
    {
      pergunta: "Qual é o nome da filha adotiva de Jake?",
      opcoes: ["Tsireya", "Kiri", "Ronal", "Tuktirey"],
      correta: 1,
    },
    {
      pergunta: "Qual tribo vive nos oceanos?",
      opcoes: ["Omatikaya", "Metkayina", "Tayrangi", "Mangkwan"],
      correta: 1,
    },
    {
      pergunta: "Quem escreveu Avatar além de dirigir?",
      opcoes: [
        "James Cameron",
        "George Lucas",
        "Peter Jackson",
        "Denis Villeneuve",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o nome da árvore sagrada dos Na'vi?",
      opcoes: [
        "Árvore das Vozes",
        "Árvore das Almas",
        "Árvore da Vida",
        "Eywa",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual filha de Jake aprende mais com os Tulkun?",
      opcoes: ["Kiri", "Tuktirey", "Neytiri", "Ronal"],
      correta: 0,
    },
    {
      pergunta: "Qual é a profissão de Grace Augustine?",
      opcoes: ["Militar", "Pilota", "Cientista", "Médica"],
      correta: 2,
    },
    {
      pergunta: "Quem interpreta Grace Augustine?",
      opcoes: [
        "Zoe Saldaña",
        "Kate Winslet",
        "Sigourney Weaver",
        "Michelle Rodriguez",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual empresa explora Pandora?",
      opcoes: ["RDA", "NASA", "SpaceX", "Weyland"],
      correta: 0,
    },
    {
      pergunta: "Qual é o nome do povo marinho aliado de Jake?",
      opcoes: ["Metkayina", "Omatikaya", "Ash Clan", "Tawkami"],
      correta: 0,
    },
    {
      pergunta: "Qual elemento conecta biologicamente os seres de Pandora?",
      opcoes: ["DNA Quântico", "Rede Neural Biológica", "Magia", "Cristais"],
      correta: 1,
    },
  ],
};
let nivelEscolhido;
let indiceAtual = 0;
let pontos = 0;
let perguntasAtuais = [];
function IniciarQuiz() {
  const nivel = document.querySelector('input[name="nivel"]:checked');

  if (!nivel) {
    alert("Escolha um nível!");
    return;
  }

  nivelEscolhido = nivel.value;

  perguntasAtuais = perguntas[nivelEscolhido];

  indiceAtual = 0;
  pontos = 0;

  mostrarPergunta();
}function IniciarQuiz() {

    const nivel = document.querySelector(
        'input[name="nivel"]:checked'
    );

    if (!nivel) {
        alert("Escolha um nível!");
        return;
    }

    nivelEscolhido = nivel.value;

    perguntasAtuais = perguntas[nivelEscolhido];

    indiceAtual = 0;
    pontos = 0;

    mostrarPergunta();
}function IniciarQuiz() {

    const nivel = document.querySelector(
        'input[name="nivel"]:checked'
    );

    if (!nivel) {
        alert("Escolha um nível!");
        return;
    }

    nivelEscolhido = nivel.value;

    perguntasAtuais = perguntas[nivelEscolhido];

    indiceAtual = 0;
    pontos = 0;

    mostrarPergunta();
}function IniciarQuiz() {
  const nivel = document.querySelector('input[name="nivel"]:checked');

  if (!nivel) {
    alert("Escolha um nível!");
    return;
  }

  nivelEscolhido = nivel.value;

  perguntasAtuais = perguntas[nivelEscolhido];

  indiceAtual = 0;
  pontos = 0;

  mostrarPergunta();
}

function mostrarPergunta() {
  const container = document.getElementById("container");

  const perguntaAtual = perguntasAtuais[indiceAtual];

  container.innerHTML = `
        <h1>${perguntaAtual.pergunta}</h1>

        <div class="opcoes">
            ${perguntaAtual.opcoes
              .map(
                (opcao, indice) => `
                <button
                    class="opcao"
                    onclick="responder(${indice})">
                    ${opcao}
                </button>
            `
              )
              .join("")}
        </div>

        <p>
            Pergunta ${indiceAtual + 1}
            de ${perguntasAtuais.length}
        </p>
    `;
}

function responder(indiceEscolhido) {
  const correta = perguntasAtuais[indiceAtual].correta;

  if (indiceEscolhido === correta) {
    pontos++;
  }

  indiceAtual++;

  if (indiceAtual < perguntasAtuais.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  const container = document.getElementById("container");

  const porcentagem = Math.round((pontos / perguntasAtuais.length) * 100);

  let mensagem = "";

  if (porcentagem === 100) {
    mensagem = "Você é um verdadeiro Na'vi!";
  } else if (porcentagem >= 70) {
    mensagem = "Ótimo conhecimento sobre Avatar!";
  } else if (porcentagem >= 50) {
    mensagem = "Bom trabalho!";
  } else {
    mensagem = "Hora de rever os filmes!";
  }

  container.innerHTML = `
        <h1>Quiz Finalizado</h1>

        <h2>${pontos}/${perguntasAtuais.length}</h2>

        <h2>${porcentagem}%</h2>

        <p>${mensagem}</p>

        <button onclick="location.reload()">
            Jogar Novamente
        </button>
    `;
}