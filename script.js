let questions = [
    {
        title: '1. WHEN YOU SEE THIS SIGN, YOU MUST:',
        alternatives: [
            'A. Stop completely, check for pedestrians, and cross traffic.',
            'B. Slow down without coming to a complete stop.',
            'C. Stop completely and wait for a green light.',
            'D. Slow down and check for traffic.'
        ],
        correctAnswer: 0,
        questionImage: "/images/stop_sign.PNG"
    },
    {
        title: '2. THIS IS THE SHAPE AND COLOR OF A __________ SIGN.',
        alternatives: [
            'A. Stop',
            'B. Wrong Way',
            'C. Yield',
            'D. Do not enter'
        ],
        correctAnswer: 2,
        questionImage: "/images/yield_sign.PNG"
    },
    {
        title: '3. THIS SIGN MEANS:',
        alternatives: [
            'A. Stop',
            'B. No U-Turn',
            'C. Yield',
            'D. Do not enter'
        ],
        correctAnswer: 3,
        questionImage: "/images/do_not_enter_sign.PNG"
    },
    {
        title: '4. THIS SIGN MEANS:',
        alternatives: [
            'A. No U-Turn',
            'B. No Turning',
            'C. No left turn',
            'D. No right turn'
        ],
        correctAnswer: 0,
        questionImage: "/images/no_uTurn_sign.PNG"
    },
    {
        title: '5. THIS SIGN MEANS:',
        alternatives: [
            'A. No U-Turn',
            'B. No left turn',
            'C. No right turn',
            'D. No turning'
        ],
        correctAnswer: 2,
        questionImage: "/images/no_right_turn.PNG"
    },
    {
        title: '6. THIS SIGN MEANS:',
        alternatives: [
            'A. You must turn left or right',
            'B. You are approaching a T-intersection',
            'C. The road that you are on intersects with a divided highway',
            'D. Designates an overpass above a divided highway'
        ],
        correctAnswer: 2,
        questionImage: "/images/divided_highway_sign.PNG"
    },
    {
        title: '7. YOU NEED TO USE EXTRA CAUTION WHEN DRIVING NEAR A PEDESTRIAN USING A WHITE CANE BECAUSE:',
        alternatives: [
            'A. He or she is deaf',
            'B. He or she has a mental disability',
            'C. He or she is blind',
            'D. He or she has a walking problem'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '8. WHEN DRIVING NEAR A BLIND PEDESTRIAN WHO IS CARRYING A WHITE CANE OR USING A GUIDE DOG, YOU SHOULD:',
        alternatives: [
            'A. Slow down and be prepared to stop',
            'B. Take the right-of-way',
            'C. Proceed normally',
            'D. Drive away quickly'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '9. IF THERE ARE NO SIGNALS AT A RAILROAD CROSSING, YOU SHOULD:',
        alternatives: [
            'A. Slow down and prepare to stop if you see or hear a train approaching',
            'B. Proceed as quickly as possible over the tracks',
            'C. Proceed through the crossing at a normal rate',
            'D. Proceed slowly over the tracks'
        ],
        correctAnswer: 0,
        questionImage: "/images/rail_road_crossing.PNG"
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
        scoreDiv.textContent = `Your Score: ${this.score}`;
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
        gradeFinal.textContent = `Your final grade is ${parseFloat(newScore).toFixed(1)}%`;
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
