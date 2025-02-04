const buttons = document.querySelectorAll('.buttons');
const submitButton = document.getElementById('goToPage');

function removeBackgroundColor() {
    buttons.forEach(button => button.classList.remove('added_attribute'));
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        removeBackgroundColor();
        button.classList.add('added_attribute');
    });
});

submitButton.addEventListener('click', () => {
    const selectedButton = document.querySelector('.buttons.added_attribute');
    if (selectedButton) {
        localStorage.setItem('selectedNumber', selectedButton.textContent);
        window.location.href = 'index2.html';
    } else {
        alert('Select a number first!!!!');
    }
});
localStorage.setItem('first', document.getElementById('firstButton').classList.contains('added_attribute'));
localStorage.setItem('second', document.getElementById('secondButton').classList.contains('added_attribute'));
localStorage.setItem('third', document.getElementById('thirdButton').classList.contains('added_attribute'));
localStorage.setItem('fourth', document.getElementById('fourthButton').classList.contains('added_attribute'));
localStorage.setItem('fifth', document.getElementById('fifthButton').classList.contains('added_attribute'));



// localStorage.setItem('on', document.getElementById('firstButton').classList.contains('added_attribute'));
// localStorage.setItem('to', document.getElementById('secondButton').classList.contains('added_attribute'));
// localStorage.setItem('thee', document.getElementById('thirdButton').classList.contains('added_attribute'));
// localStorage.setItem('fore', document.getElementById('fourthButton').classList.contains('added_attribute'));
// localStorage.setItem('fiv', document.getElementById('fifthButton').classList.contains('added_attribute'));






