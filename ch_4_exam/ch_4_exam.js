// Navigation
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

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
    {
        title: '5. IT IS AGAINST THE LAW FOR ANYONE UNDER THE AGE OF 21 TO ______ ALCOHOL',
        alternatives: [
            'A. Wear clothing advertising',
            'B. Be in the presence of',
            'C. Consume',
            'D. Serve'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '6. IT IS AGAINST THE LAW FOR ANYONE UNDER THE AGE OF 21 TO ______ ALCOHOL',
        alternatives: [
            'A. Wear clothing advertising',
            'B. Possess',
            'C. Serve',
            'D. Be in the presence of'
        ],
        correctAnswer: 1,
        questionImage: ""
    },
    {
        title: '7. IT IS AGAINST THE LAW FOR ANYONE UNDER THE AGE OF 21 TO ______ ALCOHOL.',
        alternatives: [
            'A. Serve',
            'B. Wear clothing advertising',
            'C. Be in the presence of',
            'D. Transport'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '8. ONE OF THE PENALTIES FOR DRIVING UNDER THE INFLUENCE OF ALCOHOL IS A(N):',
        alternatives: [
            'A. 5 – year driver’s license suspension',
            'B. $100.00 fine',
            'C. Attendance to Alcohol Highway Safety School',
            'D. 12 – hour sentence in jail'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '9. IF YOU ARE ARRESTED FOR DRIVING UNDER THE INFLUENCE OF ALCOHOL AND YOU REFUSE TO TAKE THE BLOOD TEST, YOU WILL RECIEVE A:',
        alternatives: [
            'A. Drug counseling treatment',
            'B. Sentence of one day in jail',
            'C. Driver’s License Suspension',
            'D. $300.00 fine'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '10. IF A POLICE OFFICER REQUIRES YOU TO TAKE A BLOOD, BREATH, OR URINE TEST, YOU:',
        alternatives: [
            'A. May choose the test you prefer',
            'B. Must sign a consent form',
            'C. May refuse if underage',
            'D. Must take the test, or your license will be suspended'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '11. FOR A FIRST CONVICTION FOR DRIVING UNDER THE INFLUENCE AT ANY BLOOD ALCOHOL CONCENTRATION LEVEL, YOU COULD:',
        alternatives: [
            'A. Lose your license for up to 5 years',
            'B. Be required to conduct a public education class on the dangers of drunk driving',
            'C. Be required to drive with a restricted occupational license',
            'D. Pay a fine of at least $300'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '12. IF UNDER 21 YEARS OF AGE YOU ARE CONSIDERED TO BE DRIVING WHILE UNDER THE INFLUENCE IF YOUR BLOOD ALCOHOL LEVEL IS:',
        alternatives: [
            'A. .08% or higher',
            'B. .10% or higher',
            'C. .05% or higher',
            'D. .02% or higher'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '13. IF YOU ARE UNDER AGE 21 AND ARE CONVICTED OF DRIVING UNDER THE INFLUENCE OF ALCOHOL, YOU WILL RECEIVE A ____ LICENSE SUSPENSION FOR A FIRST OFFENSE.',
        alternatives: [
            'A. 60-Day',
            'B. 30-Day',
            'C. 6-Month',
            'D. 1-Year'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '14. IF YOU ARE UNDER AGE 21, AND ARE CONVICTED OF CARRYING A FALSE ID CARD, YOU WILL BE REQUIRED TO PAY A $500 FINE AND YOUR LICENSE WILL BE SUSPENDED FOR 90 DAYS.',
        alternatives: [
            'A. Only if your blood alcohol content (BAC) is .02% or higher',
            'B. Even if you were not driving',
            'C. Only if you were driving at the time of arrest',
            'D. Only if your blood alcohol content (BAC) is .02% or higher and you were driving at the time of arrest'
        ],
        correctAnswer: 1,
        questionImage: ""
    },
    {
        title: '15. THE ZERO TOLERANCE LAW REDUCED THE BLOOD ALCOHOL CONTENT (BAC) FROM .08% TO ____ FOR DRIVERS UNDER 21 TO BE CHARGED WITH DRIVING UNDER THE INFLUENCE.',
        alternatives: [
            'A. .02%',
            'B. .05%',
            'C. .07%',
            'D. .00%'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '16. IF YOU ARE STOPPED BY A POLICE OFFICER, YOU SHOULD:',
        alternatives: [
            'A. Unbuckle your seat belt and lower your window',
            'B. Get your paperwork ready before the officer reaches your car',
            'C. Stay in your vehicle with your hands on the steering wheel, and wait for the officer to approach you',
            'D. Get out of your car and walk toward the patrol car'
        ],
        correctAnswer: 2,
        questionImage: ""
    }
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
            this.restartApp();
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
        gradeFinal.textContent = `Final Score: ${parseFloat(newScore).toFixed(0)}% (${this.score}/${questions.length})`;
    },

    restartApp: function () {

        if (this.currentPosition == questions.length) {
            let gradeContainer = document.getElementById('grade-container');
            let gradeBorder = document.getElementById('grade-border');

            gradeContainer.style.background = '#007DC1';
            gradeContainer.style.position = 'fixed';
            gradeContainer.style.top = '0';
            gradeContainer.style.left = '0';
            gradeContainer.style.bottom = '0';
            gradeContainer.style.right = '0';
            gradeContainer.style.height = '100vh';

            // final grade container styles
            gradeBorder.style.border = '20px solid rgb(79, 236, 6)';
            gradeBorder.style.borderRadius = '50%';
            gradeBorder.style.height = '270px';
            gradeBorder.style.width = '290px';
            gradeBorder.style.margin = '0 auto';
            gradeBorder.style.display = 'flex';
            gradeBorder.style.flexDirection = 'column';
            gradeBorder.style.justifyContent = 'center';
            gradeBorder.style.alignItems = 'center';
            gradeBorder.style.marginTop = '8em';
            gradeBorder.style.keyframes = 'bounce 2s infinite';
            
            let restartBtn = document.createElement('button');
            restartBtn.textContent = 'Restart';

            let reButton = document.getElementById('btn');
            reButton.appendChild(restartBtn);

            restartBtn.addEventListener('click', () => {
                location.reload();
            });

            let homeButton = document.getElementById('btn2');
            homeButton.innerHTML = `<a href="/App/home.html"><button>Main Menu</button></a>`;
        }
    }
};

// initialize app
app.start();