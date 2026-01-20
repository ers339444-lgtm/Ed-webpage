const gameText = document.getElementById('game-text2');
const userInput = document.getElementById('user-input2');
const submitBtn = document.getElementById('submit-btn2');

// Print to the screen
function print(text) {
    gameText.innerText += text + "\n";
    gameText.scrollTop = gameText.scrollHeight;
}

// Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let currentStep = "askUsername";
let username = "";

// Button click handler
submitBtn.addEventListener("click", async () => {
    const input = userInput.value.trim();
    userInput.value = "";


    // STEP 1 → Ask username
    if (currentStep === "askUsername") {
        username = input;

        if (username === "student" || username === "teacher") {
            print("Thank you.");
            await sleep(1000);
            print("Please input your password:");
            currentStep = "askPassword";
        } else {
            print("Incorrect username. Please refresh page and try again.");
            currentStep = "end";
        }

    // STEP 2 → Ask password
} else if (currentStep === "askPassword") {
    const password1 = input;

    if (username === "student" && password1 === "123456") {
        print("You are logged in as a student.");
        document.getElementById("main-link").style.display = "block";  // ← SHOW LINK
    } else if (username === "teacher" && password1 === "qwerty") {
        print("You are logged in as a teacher.");
        document.getElementById("main-link").style.display = "block";  // ← SHOW LINK
    } else {
        print("Incorrect password.");
        await sleep(1500);
        print("Refresh page and try again.");
    }

    currentStep = "end";


    // END → Game is finished
    } else if (currentStep === "end") {
        print("Session finished. Refresh page to try again.");
    }
});

// Start text
print("Log-in Page \n\nWelcome! Please enter your username:");
