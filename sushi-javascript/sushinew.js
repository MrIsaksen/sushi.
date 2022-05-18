var myQuestions = [
    {
      question: 'Hvor stammer sushi fra?',
      answers: {
        a: 'japan',
        b: 'kina',
        c: 'korea'
      },
      correctAnswer: 'b'
    },
    
    {
      question: 'Hvilket land forbinder man med sushi?',
      answers: {
        a: 'Japan',
        b: 'Norge',
        c: 'Peru'
      },
      correctAnswer: 'a'
    },

    {
        question: 'Hvor i danmark spises der mest sushi?',
        answers: {
          a: 'Aalborg',
          b: 'København',
          c: 'På bornholm'
        },
        correctAnswer: 'b'
      },

      {
        question: 'Hvad hedder tangen som vanlig bruges til at lave sushi?',
        answers: {
          a: 'honzo',
          b: 'tariyaki',
          c: 'nori'
        },
        correctAnswer: 'c'
      },

      {
        question: 'Hvor lang tid tager det en japansk sushikok at blive faglært?',
        answers: {
          a: '2-3 år',
          b: '5-6 år',
          c: '8-10 år'
        },
        correctAnswer: 'c'
      },

      {
        question: 'Hvor lang tid tager det en danks sushikok at blive faglært?',
        answers: {
          a: '2-3 år',
          b: '5-6 år',
          c: '8-10 år'
        },
        correctAnswer: 'a'
      },

      {
        question: 'Hvad hedder den giftige fisk som af og til bruges til sushi i japan?',
        answers: {
          a: 'hornfisk',
          b: 'fugu',
          c: 'nemo'
        },
        correctAnswer: 'b'
      },
      







  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'green';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }