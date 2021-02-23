
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
  if (shuffledQuestions.length > currentQuestionIndex + 1){
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
    { text: 'Creates a control variable', correct: false}, 
    { text: 'Sets the default function', correct: false}
  ]
  },

  {
  question: 'Which event is used to run something after the page has finished loading?',
  answers: [
    { text: 'onfinished', correct: false},
    { text: 'oncomplete', correct: false},
    { text: 'onpage', correct: false},
    { text: 'onload', correct: true}
  ]
  },

  {
    question: 'With JavaScript, which of the following is NOT a logical operator?',
    answers: [
      { text: '&', correct: true},
      { text: '&&', correct: false},
      { text: '||', correct: false},
      { text: '!', correct: false}
    ]
    }, 

  {
    question: 'With JavaScript, which of the following is true if x and y are NOT equal?',
    answers: [
      { text: 'if x != y', correct: false},
      { text: 'if (x != y)', correct: true},
      { text: 'if x not= y', correct: false},
      { text: 'if (x not y)', correct: false}
    ]
    }, 

  {
    question: 'With JavaScript, how do you write a conditional statement for executing some code if \"i\" is equal to 5.',
    answers: [
      { text: 'if i == 5 then', correct: false},
      { text: 'if (i == 5)', correct: true},
      { text: 'if i = 5', correct: false},
      { text: 'if (i = 5) then', correct: false}
    ]
    }, 

  {
    question: 'Which DOM method is supported by most browsers?',
    answers: [
      { text: 'x.getElementById(id)', correct: false},
      { text: 'x.getElementByTagName(name)', correct: false},
      { text: 'both of the methods are supported by most browsers', correct: true}
    ]
    }, 

  {
    question: 'With JavaScript, which of the following is NOT a valid parameter',
    answers: [
      { text: 'text', correct: false},
      { text: 'number', correct: false},
      { text: 'variable', correct: false},
      { text: 'operator', correct: true}
    ]
    }, 

    {
      question: 'With JavaScript, the most common way to assign a value to a variable is by using what?',
      answers: [
        { text: 'equal sign', correct: true},
        { text: 'Semicolon', correct: false},
        { text: 'HTML', correct: false},
        { text: 'Arrow Function', correct: false}
      ]
      }, 

    {
      question: 'With JavaScript, the second control statement in a for loop usually does what?',
      answers: [
        { text: 'Sets the Termination Condition', correct: true},
        { text: 'Increments a Counter', correct: false},
        { text: 'Creates a control variable', correct: false},
        { text: 'Trick Question. for loops only have one control statement', correct: false}
      ]
      }, 

    {
      question: 'With JavaScript, how do you call a function named \'myFunction\'?',
      answers: [
        { text: 'call function myFunction()', correct: false},
        { text: 'call myFunction()', correct: false},
        { text: 'myFunction()', correct: true},
        { text: 'run Function(my)', correct: false}
      ]
      }, 

    {
      question: 'With JavaScript, what is the correct way to create an array?',
      answers: [
        { text: 'var mycards = new Array(1:\"Clubs\", 2:\"Hearts\", 3:\"Spades\", 4:\"Diamonds\")', correct: false},
        { text: 'var mycards = new Array[\"Clubs\", \"Hearts\", \"Spades\", \"Diamonds\"]', correct: true},
        { text: 'var mycards = new Array(1=\"Clubs\", 2=\"Hearts\", 3=\"Spades\", 4=\"Diamonds\")', correct: false},
        { text: 'var mycards = new Array(\"Clubs\", \"Hearts\", \"Spades\", \"Diamonds\")', correct: false}
      ]
      }, 

    {
      question: 'With JavaScript, how do you round the number 7.25 to the nearest integer?',
      answers: [
        { text: 'Math.round(7.25)', correct: true},
        { text: 'Math.floor(7.25)', correct: false},
        { text: 'Math.ceil(7.25)', correct: false},
        { text: 'roundUp(7.25)', correct: false}
      ]
      }, 

    {
      question: 'In which HTML element does JavaScript go into?',
      answers: [
       { text: '<script>', correct: true},
        { text: '<javascript>', correct: false},
        { text: '<js>', correct: false},
        { text: '<scripting>', correct: false}
      ]
      }, 

    {
      question: 'With JavaScript, what is the corrent way to return a random number between 0 and 1?',
      answers: [
       { text: 'document.write(Math.random());', correct: true},
        { text: 'document.write(Math.rnd());', correct: false},
        { text: 'document.write(random());', correct: false},
        { text: 'document.write(rnd());', correct: false}
      ]
      }, 

    {
      question: 'JavaScript is the same as Java',
      answers: [
        { text: 'True', correct: false},
        { text: 'False', correct: true}
      ]
      },

    {
      question: 'With JavaScript, what is the correct syntax for opening a new window called \'w2\'',
      answers: [
        { text: 'w2=window.open(\"http://www.w3schools.com\");', correct: true},
        { text: 'w2=window.new(\"http://www.w3schools.com\");', correct: false}
      ]
      }, 

    {
      question: 'The JavaScript international standard is called?',
      answers: [
        { text: 'ECMAScript', correct: true},
        { text: 'Java', correct: false},
        { text: 'ISO-262', correct: false}
      ]
      },
      
    {
      question: 'With JavaScript, how does a \'while\' loop start?',
      answers: [
        { text: 'while (i <= 10)', correct: true},
        { text: 'while i = i to 10', correct: false},
        { text: 'while (i <= 10; i++)', correct: false}
      ]
      }, 

    {
      question: 'With JavaScript, how do you write a conditional statement for executing some code if \'i\' is not equal to 5?',
      answers: [
        { text: 'if (i != 5)', correct: true},
        { text: 'if i <> 5', correct: false},
        { text: 'if (i =! 5) then', correct: false},
        { text: 'if (i not 5)', correct: false}
      ]
      },
      
    {
      question: 'How many buttons are there in a Javascript alert box?',
      answers: [
        { text: 'none', correct: false},
        { text: 'one', correct: true},
        { text: 'two', correct: false},
        { text: 'three', correct: false}
      ]
      },

    {
      question: 'Most event handlers are added where?',
      answers: [
        { text: 'to an external JavaScript', correct: false},
        { text: 'to JavaScript functions', correct: false},
        { text: 'within the HTML that is to trigger the event', correct: true}
      ]
      },

    {
      question: 'A variable that your webpage can store on or retrieve from the users computer is called?',
      answers: [
        { text: 'Session', correct: false},
        { text: 'Java', correct: false},
        { text: 'Applet', correct: false},
        { text: 'Cookie', correct: true}
      ]
      },

    {
      question: 'Where is the correct place to insert a JavaScript',
      answers: [
        { text: 'Only in the \<head\> section', correct: false},
        { text: 'Only in the \<body\> section', correct: false},
        { text: 'Both the \<head\> section and the \<body\> section are correct', correct: true}
      ]
      },

    {
      question: 'With JavaScript, how do you round the number 7.25 downwards to the nearest integer?',
      answers: [
        { text: 'Math.round(7.25)', correct: false},
        { text: 'Math.floor(7.25)', correct: true},
        { text: 'Math.ceil(7.25)', correct: false}
      ]
      },

    {
      question: 'With JavaScript, how do you round the number 7.25 upwards to the nearest integer?',
      answers: [
        { text: 'Math.round(7.25)', correct: false},
        { text: 'Math.floor(7.25)', correct: false},
        { text: 'Math.ceil(7.25)', correct: true}
      ]
      },

    {
      question: 'With JavaScript, how do you create a function named \'function\'?',
      answers: [
        { text: 'function = myFunction()', correct: false},
        { text: 'function myFunction()', correct: true},
        { text: 'function: myFunction()', correct: false}
      ]
      },

    {
      question: 'Clicking an input field on a page with the mouse will trigger which event?',
      answers: [
        { text: 'onfocus', correct: false},
        { text: 'onclick', correct: false},
        { text: 'onmousedown', correct: false},
        { text: 'all of the events mentioned will be triggered', correct: true},
      ]
      },

    {
      question: 'Clicking an input field on a page with the mouse will trigger which event?',
      answers: [
        { text: 'onfocus', correct: true},
        { text: 'onclick', correct: false},
        { text: 'onmousedown', correct: false},
        { text: 'all of the events mentioned will be triggered', correct: false},
      ]
      },

      {
        question: 'Clicking an input field on a page with the mouse will trigger which event?',
        answers: [
          { text: 'onfocus', correct: true},
          { text: 'onclick', correct: false},
          { text: 'onmousedown', correct: false},
          { text: 'all of the events mentioned will be triggered', correct: false}
        ]
        },

      {
        question: 'An external JavaScript cannot contain the \<script\> tag',
        answers: [
          { text: 'True', correct: true},
          { text: 'False', correct: false}
        ]
        },

      {
        question: 'With JavaScript, in a Switch statement, which command skips the rest of a case statement?',
        answers: [
          { text: 'return', correct: false},
          { text: 'exit', correct: false},
          { text: 'drop', correct: false},
          { text: 'break', correct: true}
        ]
        },

      {
        question: 'What is the correct JavaScript syntax to refer to an external script file called \'script.js?\'',
        answers: [
          { text: '<script href=\"script.js\"', correct: false},
          { text: '<script src=\"script.js\"', correct: true},
          { text: '<script name=\"script.js\"', correct: false},
          { text: '<script \"script.js\"', correct: false}
        ]
        },
//Stopped on Question 34
  ]