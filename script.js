let question = {
    title: '1. WHEN YOU SEE THIS SIGN, YOU MUST:',
    alternatives: [
        '[A] Stop completely, check for pedestrians, and cross traffic',
        '[B] Slow down without coming to a complete stop',
        '[C] Stop completely and wait for a green light',
        '[D] Slow down and check for traffic'
    ],
    correctAnswer: 0,
    questionImage: "/images/stop_sign.PNG"
};

function start() {
    let alts = document.querySelectorAll('.alternative');

    alts.forEach(function (element, index) {
        element.addEventListener('click', function () {
            // check correct answer
            console.log('check correct answer')
        });
    });

    // show first question 
    showQuestion(question);
}

function showQuestion(q) {
    // 1. Select DOM element
    let titleDiv = document.getElementById('title');
    let imgDiv = document.getElementById('image-content');

    // 2. Modify It
    titleDiv.textContent = q.title;
    imgDiv.innerHTML = `<img class="img" src="${q.questionImage}">`;
    

    // 3. Selecting by a query
    let alts = document.querySelectorAll('.alternative');
    
    // 4. Show each alternative
    alts.forEach(function (element, index) {
        element.textContent = q.alternatives[index];
        
    });

}

// call function
start()