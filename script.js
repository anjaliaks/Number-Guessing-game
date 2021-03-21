
let special = Math.trunc(Math.random() * 30) + 1;
let score = 30;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    
    const guess = Number(document.querySelector('.guess').value);

   


    if (!guess) {
        document.querySelector('.head').textContent = ' 🙄 No Number!';
    } else if (guess === special) {
        document.querySelector('.head').textContent =
            ' 😍 Your guess is correct!';
        score += 1;
        if (highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('body').style.backgroundColor = 'darkgreen';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = special;
    }
    
    else if (score > 1) {
        if (guess > special) {
            document.querySelector('.head').textContent = ' 😣 Too high guess';
            score -= 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.head').textContent = '🙄 Too low guess';
            score -= 1;
            document.querySelector('.score').textContent = score;
        }
    } else {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.head').textContent = '😥 You Lost game';
        document.querySelector('body').style.backgroundColor = 'maroon';
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 30;
    special = Math.trunc(Math.random() * 30) + 1;
    document.querySelector('.message').textContent = 'Number Must be Between 1 to 30';
    document.querySelector('.head').textContent = "Let's Guess a Number!";
    document.querySelector('.score').textContent = score;
    
    document.querySelector('body').style.backgroundColor = 'darkblue';
    document.querySelector('.guess').value = '';
});