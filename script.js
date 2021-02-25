
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

      {
        question: 'How do you add quotes inside of a string value of a JavaScript variable?',
        answers: [
          { text: 'var txt = "Spoke the Raven, + \"Nevermore.\"', correct: false},
          { text: 'var txt = "Spoke the Raven, \\"Nevermore.\\"', correct: true},
          { text: 'var txt = "Spoke the Raven, [\"Nevermore.\"]', correct: false}
        ]
        },

      {
        question: 'Which of the following can be done with JavaScript?',
        answers: [
          { text: 'form validation', correct: false},
          { text: 'Browser Detection', correct: false},
          { text: 'Create Cookies', correct: false}, 
          { text: 'All of the above', correct: true}
        ]
        },

      {
        question: 'In JavaScript, which of the following is not Only a mathematical operator?',
        answers: [
          { text: '+', correct: true},
          { text: '-', correct: false},
          { text: '*', correct: false}, 
          { text: 'All three only work as an operator', correct: false}
        ]
        },

      {
        question: 'onclick is the equivalent of which two other events',
        answers: [
          { text: 'onmouseover and onmousedown', correct: false},
          { text: 'onmousedown and onmouseout', correct: false},
          { text: 'onmousedown and onmouseup', correct: true}, 
          { text: 'onmouseup and onmouseout', correct: false}
        ]
        },

      {
        question: 'Which BEST describes JavaScript?',
        answers: [
          { text: 'a server-side scripting language', correct: false},
          { text: 'a scripting language precompiled in the browser', correct: false},
          { text: 'an object-oriented scripting language', correct: true}, 
          { text: 'None of these descriptions apply to JavaScript', correct: false}
        ]
        },

      {
      question: 'In JavaScript, how do you create an alert box with the message \"I\'m an alert box\"',
      answers: [
        { text: 'msgBox(\"I\'m an alert box\");', correct: false},
        { text: 'var alertBox = \"I\'m an alert box\";', correct: false},
        { text: 'alert(\"I\'m an alert box\");', correct: true}, 
        { text: 'alertBox = \"I\'m an alert box\";', correct: false}
      ]
      },

    {
    question: 'In JavaScript, x++ is the same as which of the following:',
    answers: [
      { text: 'x = x + 1;', correct: true},
      { text: 'x = x + x;', correct: false},
      { text: 'x = x * x;', correct: false}
    ]
    },

  {
    question: 'Which JavaScript event is detected when the mouse moves over a link?',
    answers: [
      { text: 'onmouseover', correct: true},
      { text: 'onmouseout', correct: false},
      { text: 'onmousedown', correct: false},
      { text: 'onclick', correct: false}
    ]
    },

  {
    question: 'Which JavaScript, how would you see if all three variables are equal?',
    answers: [
      { text: '(x==y)&&(y==z)', correct: true},
      { text: '(x==y)||(y==z)', correct: false},
      { text: '(x=y)&&(y=z)', correct: false},
      { text: '(x==y)&(y==z)', correct: false}
    ]
    },
  
  {
    question: 'Which JavaScript, which property is used to redirect a user to another page?',
    answers: [
      { text: 'document.url', correct: false},
      { text: 'window.location', correct: true},
      { text: 'window.href', correct: false},
      { text: 'document.href', correct: false}
    ]
    },

  {
    question: 'With JavaScript, which label catches all values except those specified in a Switch statement?',
    answers: [
      { text: 'default', correct: true},
      { text: 'else', correct: false},
      { text: 'other', correct: false},
      { text: 'case', correct: false}
    ]
    },

  {
    question: 'With JavaScript, how do you read the first character in a string?',
    answers: [
      { text: 'stringName.charAt(0)', correct: true},
      { text: 'stringName.charAt(1)', correct: false},
      { text: 'stringName.substr(0)', correct: false},
      { text: 'stringName.substr(1)', correct: false}
    ]
    },

  {
    question: 'A JavaScript statement should end with what?',
    answers: [
      { text: 'comma', correct: false},
      { text: 'semicolon', correct: true},
      { text: 'colon', correct: false},
      { text: 'bracket', correct: false}
    ]
    },

  {
    question: 'How can you add a comment in JavaScript',
    answers: [
      { text: '<!--This is a comment-->', correct: false},
      { text: '\'This is a comment\'', correct: false},
      { text: '//This is a comment', correct: true},
      { text: '*This is a comment*', correct: false}
    ]
    },

  {
    question: 'Actions that can be detected by JavaScript are called?',
    answers: [
      { text: 'Arrays', correct: false},
      { text: 'Events', correct: true},
      { text: 'Cookies', correct: false},
      { text: 'Classes', correct: false}
    ]
    },

  {
    question: 'Which of the following is not a built-in JavaScript object?',
    answers: [
      { text: 'Time', correct: true},
      { text: 'Array', correct: false},
      { text: 'Date', correct: false},
      { text: 'Math', correct: false}
    ]
    },

  {
    question: 'Which event is triggered when a form field is changed?',
    answers: [
      { text: 'onsubmit', correct: false},
      { text: 'onblur', correct: false},
      { text: 'onclick', correct: false},
      { text: 'onchange', correct: true}
    ]
    },

    {
      question: 'With JavaScript, how does a \"for\" loop start?',
      answers: [
        { text: 'for(i=0; i <=5)', correct: false},
        { text: 'for i=1 to i=5', correct: false},
        { text: 'for (i<=5; i++)', correct: false},
        { text: 'for (i=0; i<=5; i++)', correct: true}
      ]
      },

    {
      question: 'With JavaScript, how do you reference an entry in an array?',
      answers: [
        { text: 'myArray(entry)', correct: false},
        { text: 'myArray[entry]', correct: true},
        { text: 'myArray{entry}', correct: false},
        { text: 'myArray<entry>', correct: false}
      ]
      },

    {
      question: 'With JavaScript, what operator do you use for multiplication?',
      answers: [
        { text: '*', correct: true},
        { text: 'x', correct: false},
        { text: 'X', correct: false},
        { text: '++', correct: false}
      ]
      },

    {
      question: 'With JavaScript, can HTML markup be added in a text string?',
      answers: [
        { text: 'Yes', correct: true},
        { text: 'No', correct: false}
      ]
      },

      {
        question: 'With JavaScript, pressing down on a mouse button triggers which event?',
        answers: [
          { text: 'onmouseover and onclick', correct: false},
          { text: 'onclick', correct: false},
          { text: 'onmouseover', correct: false},
          { text: 'onmousedown', correct: true}
        ]
        },

      {
        question: 'What is the correct JavaScript syntax to change the content of an HTML element with a <p> and id=\"demo\"',
        answers: [
          { text: 'document.getElementByName(\"p\").innerHTML= \"Replacement Text\"', correct: false},
          { text: 'document.getElementById(\"demo\").innerHTML= \"Replacement Text\"', correct: true},
          { text: 'document.getElement(\"p\").innerHTML= \"Replacement Text\"', correct: false},
          { text: '#demo.innerHTML = \"Replacement Text\"', correct: false}
        ]
        },

      {
        question: 'With JavaScript, which of the following is NOT a type of popup box?',
        answers: [
          { text: 'Alert', correct: false},
          { text: 'Confirm', correct: false},
          { text: 'Prompt', correct: false},
          { text: 'Radio', correct: true}
        ]
        },

      {
        question: 'With JavaScript, do while (x < y) runs?',
        answers: [
          { text: 'until x >= y', correct: true},
          { text: 'until x > y', correct: false},
          { text: 'until x < y', correct: false},
          { text: 'until x <= y', correct: false}
        ]
        },

      {
        question: 'External JavaScript scripts can be linked into more than one page?',
        answers: [
          { text: 'True', correct: true},
          { text: 'False', correct: false}
        ]
        },

      {
        question: 'With JavaScript, how can you find the browser name of the client?',
        answers: [
          { text: 'navigator.appName', correct: true},
          { text: 'window.appName', correct: false},
          { text: 'browser.appName', correct: false},
          { text: 'document.appName', correct: false}
        ]
        },


        {
          question: 'With JavaScript, how do you define a numerical value?',
          answers: [
            { text: 'var x = 3;', correct: true},
            { text: 'var x = Math(3);', correct: false},
            { text: 'Math.x = 3;', correct: false},
            { text: 'var x = \"3\"', correct: false}
          ]
          },

        {
          question: 'With JavaScript, how can you convert comma separated values into an array?',
          answers: [
            { text: 'txtArray=txt.indexOf(\",\")', correct: false},
            { text: 'txtArray=txt.split(\",\")', correct: true},
            { text: 'txtArray=txt.trim(\",\")', correct: false},
            { text: 'txtArray=txt.substr(\",\")', correct: false}
          ]
          },

        {
          question: 'With JavaScript, how would you change the date to one week later?',
          answers: [
            { text: 'myDate.setDate(+7)', correct: false},
            { text: 'myDate.setDate(myDate.getDate()+7)', correct: true},
            { text: 'myDate.chgDate(myDate.getDate()+7)', correct: false},
            { text: 'myDate.chgDate(+7)', correct: false}
          ]
          },

        {
          question: 'Which event is specific to the keyboard?',
          answers: [
            { text: 'onclick', correct: false},
            { text: 'onfocus', correct: false},
            { text: 'onkeydown', correct: true},
            { text: 'hover', correct: false}
          ]
          },

        {
          question: 'With JavaScript, the first control statement in a for loop does what?',
          answers: [
            { text: 'sets the termination condition', correct: false},
            { text: 'increments the counter', correct: false},
            { text: 'runs the function', correct: false},
            { text: 'creates a control variable', correct: true}
          ]
          },

        {
          question: 'With JavaScript, which code has no syntax error',
          answers: [
            { text: 'alert(\"Hello Mr. \" + lastName + \". How are you doing?\");', correct: true},
            { text: 'alert(Hello Mr.  + lastName + . How are you doing?);', correct: false},
            { text: 'alert(Hello Mr. \" + lastName + \". How are you doing?\");', correct: false},
            { text: 'alert(\"Hello Mr.  + lastName + . How are you doing?\");', correct: false}
          ]
          },
//stopped on question 69. Image 84

  ]