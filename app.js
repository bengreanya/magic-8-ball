/* Imports */

/* Get DOM Elements */

/* State */

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');
const promptSection = document.getElementById('prompt');
const fortuneSection = document.getElementById('fortune');
const answerP = document.getElementById('answer');
const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

submitBtn.addEventListener('click', () => {
    promptSection.classList.toggle('hide');
    fortuneSection.classList.toggle('hide');
    const randInt = Math.floor(Math.random() * answers.length);
    const randomChoice = answers[randInt];
    answerP.textContent = randomChoice;
});
