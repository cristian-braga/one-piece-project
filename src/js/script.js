const buttons = document.querySelectorAll('.button');
const characters = document.querySelectorAll('.character');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        unselectBtn();
        button.classList.add('selected');

        unselectChar();
        characters[index].classList.add('selected');
    });
});

function unselectChar() {
    const selectedChar = document.querySelector('.character.selected');
    selectedChar.classList.remove('selected');
}

function unselectBtn() {
    const selectedBtn = document.querySelector('.button.selected');
    selectedBtn.classList.remove('selected');
}
