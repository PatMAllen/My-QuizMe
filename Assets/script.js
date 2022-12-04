const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
 currentQuestionIndex++
 setNextQuestion()
})

function startGame() {
 startButton.classList.add('hide')
 shuffledQuestions = questions.sort(() => Math.random() - .5)
 currentQuestionIndex = 0
 questionContainerElement.classList.remove('hide')
 setNextQuestion()
}

function setNextQuestion() {
 resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
 questionElement.innerText = question.question
 question.answers.forEach(answer => {
  const button = document.createElement('button')
  button.innerText = answer.text 
  button.classList.add('btn')
  if(answer.correct) {
     button.dataset.correct = answer.correct
  }
  button.addEventListener('click', selectAnswer)
  answerButtonsElement.appendChild(button)
 });
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
   answerButtonsElement.removeChild(answerButtonsElement.firstChild)  
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct )
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct) 
  })
  if(shuffledQuestions.length > currentQuestionIndex + 1) {
     nextButton.classList.remove('hide')
  } else {
     startButton.innerText = 'Restart'
     startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)  
  if (correct) {
     element.classList.add('correct')
  } else {
     element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong') 
}

const questions = [
 {
   question: 'What is a sandwich ?',
   answers: [
     { text: 'Bread, Meat, Cheese', correct: true },
     { text: 'Paper & Pens', correct: false },
     { text: 'Pickels & Mayo', correct: false },
     { text: 'Rice & Curry', correct: false }
   ]
 },
 {
     question: 'Which one is considered a Fruit & not a Veggie ?',
     answers: [
       { text: 'Broccoli', correct: false },
       { text: 'Peppers', correct: false },
       { text: 'Tomatoes', correct: true },
       { text: 'Onions', correct: false }
     ]
 },
 {
     question: 'What is milk ?',
     answers: [
       { text: 'Protien', correct: false },
       { text: 'Vitamin', correct: false },
       { text: 'Dairy', correct: true },
       { text: 'Grains', correct: false }   
     ]
 },
 {
     question: 'What will you eat for lunch ?', 
     answers: [
       { text: 'Pizza', correct: true },
       { text: 'Burgers', correct: true },
       { text: 'Italian', correct: true },
       { text: 'Rice Stir-fry', correct: true }
     ]
 }
]