var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertChoiceToWord(letter) {
    if (letter === 'r') return 'Rock'
    if (letter === 's') return 'Scissors'
    return 'Paper'
}

function win(user, computer) {
    userScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoiceDiv = document.getElementById(user);
    result_p.innerHTML = `User with ${convertChoiceToWord(user)} beats computer with ${convertChoiceToWord(computer)}`
    userChoiceDiv.classList.add('green-glow');
    setTimeout(() => userChoiceDiv.classList.remove('green-glow'), 300);
}

function lose(user, computer) {
    computerScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoiceDiv = document.getElementById(user);
    result_p.innerHTML = `User with ${convertChoiceToWord(user)} loses to computer with ${convertChoiceToWord(computer)}`
    userChoiceDiv.classList.add('red-glow');
    setTimeout(() => userChoiceDiv.classList.remove('red-glow'), 300);
}

function draw(user, computer) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoiceDiv = document.getElementById(user);
    result_p.innerHTML = 'Draw'
    result_p.innerHTML = `User with ${convertChoiceToWord(user)} draws to computer with ${convertChoiceToWord(computer)}`
    userChoiceDiv.classList.add('grey-glow');
    setTimeout(() => userChoiceDiv.classList.remove('grey-glow'), 300);

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break
    }
}

function main() {
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click', () => game('s'));
}


main();