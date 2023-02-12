
const correctAnswer = ['B', 'B' ,'B' ,'B'];

const quizs = document.getElementById('quiz');

quizs.addEventListener('submit', e => {

    e.preventDefault();

    //score 

    let score = 0;

    const userAnswer = [quizs.q1.value , quizs.q2.value , quizs.q3.value , quizs.q4.value ,];

    userAnswer.forEach((answer,index) => {

        if(answer === correctAnswer[index]){
            score += 25;
        }
    });

    // show result

    scrollTo(0,0);

    const showOff = document.getElementById('result');

    showOff.style.display = 'block';

    const resultText = document.getElementById('scores');

    const resultConverted = parseInt(resultText.innerText);

    const finalResult = resultConverted + score;

    resultText.innerText = finalResult;
});