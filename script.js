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
    console.log(alts);
}

showQuestion(question);