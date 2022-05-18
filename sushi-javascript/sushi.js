function generateQuiz(questions,quizContainer, resultContainer, submitButton){ 


    function showQuestions(questions, quizContainer){ 
        //here skal der være kode///
     }

     function showResults(questions, quizContainer, resultContainer){ 
        //her skal der være kode//
     }

     // disse koder viser spørgsmålene.//
     showQuestions(questions, quizContainer);

     //når brugeren klikker vises resultatet. 

     submitButton.onclick = function(){

        showResults(questions, quizContainer, resultContainer);
     } 
}


//vores quiz spørgsmål//

var myQuestions = [ 
 
    { 
        question: 'hvad rimer på møller',
        answers: {
            a: 'bolde', 
            b: 'stolpe',
            c: 'øller'
        },
        correctAnswer: 'c'
    },
    { 
        question: 'en kat siger',
        answers: {
            a: 'vov',
            b: 'piv',
            c: 'miav'
        },
        correctAnswer: 'c'
    }
];

//vis spørgsmål//

function showQuestions(questions, quizContainer){
    //vi skal bruge et sted til at vise outputtet af svarene//
    var output = [];
    var answers; 

    // for hvert spørgsmål//
    for(var i=0; i<questions.length; i++){

        //først reset listen af svarmulighederne//
        answers = [];


        //for hvert et gyldigt svar til dette spørgsmål//
        for(letter in questions[i].answers){ 
            
            //tilføj en html radio button//
            answers.push(
                '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                + '</label>'
            );
        }

        //tilføj dette spørgsmål og svar til outpittet//
           output.push(
           '<div class="questions">' + questions[i].question + '</div>'
           + '<div class="answers">' + answers.join('') + '</div>'     
           );       
    }

// til slut forbind output listen til strings af html og put dem på siden. //
quizContainer.innerHTML = output.join('');
}

showQuestions(questions, quizContainer);

function showResults(questions, quizContainer, resultContainer){

    //samle sammen container fra quiz//
    var answerContainers = quizContainer.querySelectorAll('.answers');

    //hold styr på brugers svar//
    var userAnswer = '';
    var numCorrect = 0;

    //for hvert spørgsmål//
    for(var i=0; i<questions.length; i++){

    //find det valgte svar//
    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:cheked')||{}).value;
    
    //hvis svaret er rigtigt//
    if(userAnswer===questions[i].correctAnswer){
        //tilføj til numret af korrekt svar//
        numCorrect++;

        //farv svaret grønt//
        answerContainers[i].style.color ='lightgreen';
    }

    //hvis svaret er forkert eller blank//

    else{

        //farv svaret rødt//
        answerContainers[i].style.color ='red';
    }

    }

    //vis det samlet antalt korrekt svar//
    resultContainer.innerHTML = numCorrect + 'out of ' + questions.length;
}

//når indsendt er on, hvis resultat//

submitButton.onclick = function(){
    showResults(questions, quizContainer, resultContainer);
}

var quizContainer = document.getElementById('quiz');
var resultContainer = document.getElementById('result');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultContainer, submitButton);


