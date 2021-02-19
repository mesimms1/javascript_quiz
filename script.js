
//variables that connect to the html
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex


//event listeners for start and next buttons
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

//start game function with random questions
function startGame(){
  console.log('Started')
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  shuffledQuestions = questions.sort(() =>
    Math.random() - .5)
  currentQuestionIndex = 0
  setNextQuestion()
  

}

//next question function
function setNextQuestion(){
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

//show question function
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

//reset the quiz function when quiz ends 
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
  
}

//select specific answers function
function selectAnswer(e){
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.lenght > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = "Restart"
    startButton.classList.remove('hide')
  }
  
}

//function to let user know if answer was correct or in correct
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  }else{
    element.classList.add('wrong')
  }
    
}

//function to clear classes when next question is set up. 
function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

//list of questions
let questions = [
  {
    question: 'What is 2+2?',
    answers: [
      { text: '4', correct: true},
      { text: '22', correct: false}
    ]
  },
  {
  question: 'JavaScript is case-sensitive',
  answers: [
    { text: 'True', correct: true},
    { text: 'False', correct: false}
  ]
  },
  {
  question: 'With JavaScript, the third control statement in a for loop usually does what?',
  answers: [
    { text: 'Sets the Termination Condition', correct: false},
    { text: 'Increments a Counter', correct: true},
    { text: 'Creates a control variable', correct: false}
  ]
  },
  {
  question: 'Which event is used to run something after the page has finished loading?',
  answers: [
    { text: 'onfinished', correct: false},
    { text: 'oncomplete', correct: false},
    { text: 'onload', correct: true}
  ]
  }
  ]