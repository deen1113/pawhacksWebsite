
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
        question3: document.querySelector('input[name="question3"]:checked').value,
        question4: document.querySelector('input[name="question4"]:checked').value,
        question5: document.querySelector('input[name="question5"]:checked').value,
        question6: document.querySelector('input[name="question6"]:checked').value,
        question7: document.querySelector('input[name="question7"]:checked').value,
        question8: document.querySelector('input[name="question8"]:checked').value
    };
    console.log(answers)

    let result = "You got: ";
    if (answers.question1 === "no" && answers.question2 === "no" && answers.question3 === "no" &&
        answers.question4 === "alone" && answers.question5 === "depends" && answers.question6 === "depends" && answer.question7 === "typed on a device") {
        result += "The SQ3R Method!";
    }
    else if (answers.question1 === "no" && answers.question2 === "no" && answers.question3 === "no" &&
        answers.question4 === "alone" && answers.question5 === "depends" && answers.question6 === "long-sessions" && answer.question7 === "depends" && answer.question8 === "both") {
        result += "The SQ3R Method!";
    }
    else if (answers.question1 === "yes" && answers.question2 === "sometimes" && answers.question3 === "no" &&
        answers.question4 === "alone" && answers.question5 === "not-helpful" && answers.question6 === "short-bursts") {
        result += "The Pomodoro Method!";
    }
    else if (answers.question1 === "yes" && answers.question2 === "no" && answers.question3 === "no" &&
        answers.question4 === "alone" && answers.question5 === "depends" && answers.question6 === "depends") {
        result += "The Pomodoro Method!";
    }
    else if (answers.question1 === "yes" && answers.question2 === "yes" && answers.question3 === "yes" &&
        answers.question4 === "alone" && answers.question5 === "helpful" && answers.question6 === "short-bursts" &&
        answers.question7 === "handwritten" && answers.question8 === "quiet") {
        result += "The Feynman Technique!";
    } else if (answers.question1 === "yes" && answers.question2 === "yes" && answers.question3 === "yes" &&
        answers.question4 === "alone" && answers.question5 === "helpful" && answers.question6 === "short-bursts" &&
        answers.question7 === "handwritten" && answers.question8 === "busy") {
        result += "The Feynman Technique!";
    } else if (answers.question1 === "yes" && answers.question2 === "yes" && answers.question3 === "yes" &&
        answers.question4 === "alone" && answers.question5 === "helpful" && answers.question6 === "short-bursts" &&
        answers.question7 === "typed" && answers.question8 === "quiet") {
        result += "The Feynman Technique!";
    } else if (answers.question1 === "yes" && answers.question2 === "yes" && answers.question3 === "yes" &&
        answers.question4 === "alone" && answers.question5 === "helpful" && answers.question6 === "short-bursts" &&
        answers.question7 === "typed" && answers.question8 === "busy") {
        result += "The Feynman Technique!";
    } else if (answers.question1 === "yes" && answers.question2 === "yes" && answers.question3 === "yes" &&
        answers.question4 === "alone" && answers.question5 === "helpful" && answers.question6 === "long-sessions" &&
        answers.question7 === "handwritten" && answers.question8 === "quiet") {
        result += "The Feynman Technique!";
    }
    else if (answers.question1 === "no" && answers.question2 === "yes" && answers.question3 === "no" &&
        answers.question4 === "group" && answers.question5 === "typed" && answers.question6 === "depends") {
        result += "The Blurt Method!";
    }
    else if (answers.question1 === "sometimes" && answers.question2 === "sometimes" && answers.question3 === "sometimes" &&
        answers.question4 === "alone" && answers.question5 === "typed" && answers.question6 === "depends") {
        result += "The Blurt Method!";
    }
    else {
        result += "The Pomodoro Method";
    }

    document.getElementById("result").textContent = result;
}

