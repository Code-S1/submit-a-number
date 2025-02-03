let theFirstButton = document.getElementById('firstButton');
let theSecondButton = document.getElementById('secondButton');
let theThirdButton = document.getElementById('thirdButton');
let theFourthButton = document.getElementById('fourthButton');
let theFifthButton = document.getElementById('fifthButton');
function removeBackgroundColor() {
    theFirstButton.classList.remove('added_attribute');
    theSecondButton.classList.remove('added_attribute');
    theThirdButton.classList.remove('added_attribute');
    theFourthButton.classList.remove('added_attribute');
    theFifthButton.classList.remove('added_attribute');
}
theFirstButton.addEventListener('click', theFirstButtonFunction);
function theFirstButtonFunction() {
    removeBackgroundColor();
    theFirstButton.classList.add('added_attribute');
}
theSecondButton.addEventListener('click', theSecondButtonFunction);
function theSecondButtonFunction() {
    removeBackgroundColor();
    theSecondButton.classList.add('added_attribute');
}
theThirdButton.addEventListener('click', theThirdButtonFunction);
function theThirdButtonFunction() {
    removeBackgroundColor();
    theThirdButton.classList.add('added_attribute');
}

theFourthButton.addEventListener('click', theFourthButtonFunction);
function theFourthButtonFunction() {
    removeBackgroundColor();
    theFourthButton.classList.add('added_attribute');
}
theFifthButton.addEventListener('click', theFifthButtonFunction);
function theFifthButtonFunction() {
    removeBackgroundColor();
    theFifthButton.classList.add('added_attribute');
}



let theSubmitButton = document.getElementById('goToPage');
theSubmitButton.addEventListener('click', checkAndGoToPage)
function checkAndGoToPage() {
    if (
        theFirstButton.classList.contains('added_attribute') ||
        theSecondButton.classList.contains('added_attribute') ||
        theThirdButton.classList.contains('added_attribute') ||
        theFourthButton.classList.contains('added_attribute') ||
        theFifthButton.classList.contains('added_attribute')
    ) {
        window.location.href = 'index2.html';
    } else {
        alert('Select a number first!!!!');
    }
}






