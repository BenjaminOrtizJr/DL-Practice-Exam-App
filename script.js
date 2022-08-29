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

let app = {
    start: function () {
        // get alternatives
        let alts = document.querySelectorAll('.alternative');

        alts.forEach(function (element, index) {
            element.addEventListener('click', function () {
                // check correct answer
                console.log('check correct answer')
            });
        });
        // show first question
        this.showQuestion(question);
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
    }
}

// initialize app
app.start();