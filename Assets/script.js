const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)

function startQuiz() {
     console.log('Started')
     startButton.classList.add('hide') 
     shuffledQuestions = questions.sort(()=> Math.random() - .5)
        currentQuestionIndex = 0
     questionContainerElement.classList.remove('hide')  
     setNextQuestion()
}

function setNextQuestion() {
 showQuestion(shuffledQuestions[currentQuestionIndex])
}

function selectAnswer(e) {
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.array.forEach((answer => {
     const button = document.createElement('button')
     button.innerText = answer.text
     button.classList.add('btn')
     if(answer.correct){
      button.dataset.correct = answer.correct
     }
     button.addEventListener('click', selectAnswer)
     answerButtonsElement.appendChild(button)
  }))
}



const questions = [
     {
          question: "What is 2 + 2 ?",
          answers:[
               {text:'4', correct: true },
               {text: '8', correct: false}
          ]
     }
]