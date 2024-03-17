
function openTab(evt, tabName) {
    let i, tabContent, tabLinks;
    let currentTab = document.getElementById(tabName);
    let currentButton = evt.currentTarget;


    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }


    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    homeTab = document.getElementsByClassName("quiz-container");
    homeTab[0].style.display = "none";


    currentTab.style.display = "block";
    currentButton.className += " active";
}


function scrollDown() {
    const element = document.getElementById('down');
    if (element) {
        const topPos = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
}


function showResult() {
    const answers = {
        question1: document.querySelector('input[name="question1"]:checked').value,
        question2: document.querySelector('input[name="question2"]:checked').value,
        question3: document.querySelector('input[name="question3"]:checked').value
    };

    let result = "You got: ";

    if (answers.question1 === "yes" && answers.question2 === "no" && answers.question3 === "pizza") {
        result += "The Pomodoro Method!";
    } else if (answers.question1 === "blue" && answers.question2 === "cat" && answers.question3 === "sushi") {
        result += "The Feynman Technique!";
    } else if (answers.question1 === "green" && answers.question2 === "bird" && answers.question3 === "burger") {
        result += "The Blurt Method!";
    } else {
        result += "The SQ3R Method!";
    }

    document.getElementById("result").textContent = result;
}

