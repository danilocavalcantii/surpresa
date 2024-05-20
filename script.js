const questions = [
    {
        question: "Bem-vinda ao nosso jogo especial senhora Geovana Dias",
        options: ["Próximo", "", ""],
        answer: 0
    },
    {
        question: "Vamos ver quanto você me conhece... Pergunta 1: Qual é o meu filme favorito?",
        options: ["Star Wars", "It a Coisa", "Senhor dos Anéis"],
        answer: 1
    
    },
    {
        question: "Pergunta 2: Qual a fruta que eu menos gosto?",
        options: ["Melancia", "Banana", "Maçã"],
        answer: 0
    },
    {
        question: "Última pergunta: Qual é o meu maior sonho?",
        options: ["Viajar pelo mundo", "Ter uma família com você", "Comprar um iate"],
        answer: 1
    },
    {
        question: "Agora, tenho uma pergunta muito importante para você...",
        options: ["Dizer", "Não Dizer", ""],
        answer: 0
    },
    {
        question: "Quer casar comigo?",
        options: ["Sim!", "", ""],
        answer: 0
    }
];

let currentQuestionIndex = 0;
const messageElement = document.getElementById('message');
const optionsElement = document.getElementById('options');

function showQuestion(index) {
    const questionData = questions[index];
    messageElement.textContent = questionData.question;
    optionsElement.innerHTML = '';

    questionData.options.forEach((option, i) => {
        if (option) {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('button');
            button.addEventListener('click', () => handleOptionClick(i));
            optionsElement.appendChild(button);
        }
    });
}

function handleOptionClick(selectedOptionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOptionIndex === currentQuestion.answer) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            messageElement.textContent = "Você aceitou! Eu te amo!";
            optionsElement.innerHTML = '';
        }
    } else {
        alert('Resposta errada. Tente novamente.');
    }
}

// Exibe a primeira pergunta
showQuestion(currentQuestionIndex);
