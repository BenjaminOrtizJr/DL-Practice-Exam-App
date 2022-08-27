let question = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'mouse'],
    correctAnswer: 1
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
