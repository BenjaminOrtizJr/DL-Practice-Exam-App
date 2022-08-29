let question = {
    title: '1. WHEN YOU SEE THIS SIGN, YOU MUST:',
    alternatives: [
        'A. Stop completely, check for pedestrians, and cross traffic.',
        'B. Slow down without coming to a complete stop.',
        'C. Stop completely and wait for a green light.',
        'D. Slow down and check for traffic.'
    ],
    correctAnswer: 0,
    questionImage: "/images/stop_sign.PNG"
};

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
];

let app = {
    start: function () {

        // keep track of the current position in the questions array
        this.currentPosition = 0;

        // get alternatives
        let alts = document.querySelectorAll('.alternative');

        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                // check correct answer
                this.checkAnswer(index);
            });
        });

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
            console.log('correct');
        }
        else {
            // not correct
            console.log('not correct');
        }

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
            this.currentPosition = 0;
        }
    }
};

// initialize app
app.start();