// Navigation
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// App 
let questions = [
    {
        title: '1. THE MINIMUM DRINKING AGE IN THIS STATE IS ____ YEARS.',
        alternatives: [
            'A. 9',
            'B. 20',
            'C. 21',
            'D. 18'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '2. PEOPLE UNDER 16 YEARS OF AGE WHO USE A FALSE IDENTIFICATION CARD TO BUY ALCOHOL WILL:',
        alternatives: [
            'A. Receive a driving suspension that starts on their 16th birthday',
            'B. Not be able to take the driver’s exam until their 21st birthday',
            'C. Receive a driving suspension that starts on their 21st birthday',
            'D. Be sent to an alcohol safety education class'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '3. IF A PERSON UNDER 21 YEARS OLD CONSUMES ALCOHOL, BUT IS NOT DRIVING A MOTOR VEHICLE, THE PENALTY FOR A FIRST OFFENSE IS:',
        alternatives: [
            'A. A 90-day driver license suspension and up to a $500 fine',
            'B. A 6-month probation',
            'C. Sentence to a corrections institution',
            'D. Points on the driving record'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '4. PARENTAL CONSENT TO CONDUCT BREATH, BLOOD, AND URINE TESTS IS:',
        alternatives: [
            'A. Not required',
            'B. Required from only one parent',
            'C. Required for people under 16 years old',
            'D. Required from both parents'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
];



let app = {
    start: function () {

        // keep track of the current position in the questions array
        this.currentPosition = 0;
        this.score = 0;
        

        // get alternatives
        let alts = document.querySelectorAll('.alternative');

        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                // check correct answer
                this.checkAnswer(index);
            });
        });

        // refresh stats/score
        this.updateStats();
        
        // show first question
        this.showQuestion(questions[this.currentPosition]);

        this.restartApp();
    },

    showQuestion: function (q) {

        // show question title
        let titleDiv = document.getElementById('title');
        titleDiv.textContent = q.title;

        // show question image
        let imgDiv = document.getElementById('image-content');
        imgDiv.innerHTML = `<img class="img" src="${q.questionImage}">`;

        // show alternatives
        let alts = document.querySelectorAll('.alternative');
        
        alts.forEach(function (element, index) {
            element.textContent = q.alternatives[index];
        });
    },

    checkAnswer: function (userSelected) {

        let currentQuestion = questions[this.currentPosition];

        if (currentQuestion.correctAnswer == userSelected) {
            // correct
            this.score++;
            this.showResult(true);
        }
        else {
            // not correct
            this.showResult(false);
        }

        // refresh stats/score
        this.updateStats();

        // increase position
        this.increasePosition();

        // show next question
        this.showQuestion(questions[this.currentPosition]);

        
    },

    increasePosition: function () {
        // increase current position
        this.currentPosition++;

        // if reached the end of database
        if (this.currentPosition == questions.length) {
            // Send back to beginning
            this.showScore();
            this.currentPosition = 0;
            
        }
    },

    updateStats: function () {
        let scoreDiv = document.getElementById('score');
        scoreDiv.textContent = `Your Score: ${this.score}/${questions.length}`;
    },

    showResult: function (isCorrect) {
        let resultDiv = document.getElementById('result');
        let result = '';

        // checks
        if (isCorrect) {
            result = 'Correct Answer!';
        }
        else {
            // get the current question
            let currentQuestion = questions[this.currentPosition];

            // get the correct answer (index)
            let correctAnswerIndex = currentQuestion.correctAnswer;

            // get the correct answer (text)
            let correctAnswerText = currentQuestion.alternatives[correctAnswerIndex];

            result = `Incorrect! Correct answer: ${correctAnswerText}`;
        }

        resultDiv.textContent = result;
    },

    showScore: function () {
        let newScore = this.score / questions.length * 100;

       
        let gradeFinal = document.getElementById('test-grade');
        gradeFinal.textContent = `Final Grade: ${parseFloat(newScore).toFixed(1)}%`;
    },

    restartApp: function () {
        let restartBtn = document.getElementById('btn');

        restartBtn.addEventListener('click', () => {
            location.reload();
        });
    }
};

// initialize app
app.start();
