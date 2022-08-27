let question = {
    title: '1. WHEN YOU SEE THIS SIGN, YOU MUST:',
    alternatives: ['A. Stop completely, check for pedestrians, and cross traffic', 'B. Slow down without coming to a complete stop', 'C. Stop completely and wait for a green light', 'D. Slow down and check for traffic'],
    correctAnswer: 0,
    questionImage: "/images/stop_sign.PNG"
};

function showQuestion(q) {
    // 1. Select DOM element
    let titleDiv = document.getElementById('title');

    // 2. Modify It
    titleDiv.textContent = q.title;

    // 3. Selecting by a query
    let alts = document.querySelectorAll('.alternative');
    

    // 4. Show each alternative
    alts.forEach(function (element, index) {
        element.textContent = q.alternatives[index];
        
        element.addEventListener('click', function () {
            if (index === q.correctAnswer) {
                console.log('Correct');
            } else {
                console.log('Incorrect');
            }
        });
        
    });

}
// call function
showQuestion(question);

let btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    console.log('Clicked!');
    
});
