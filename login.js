const gameText= document.getElementByld('game-text2');
const userInput= document.getElementByld('user-input2');
const submitBtn= document.getElementByld('submit-btn2');
function print(text) {
    gameText.innerText +=text + "\n";
    gameText.scrollTop= gameText.scrollHeight;
}
function sleep(ms){
  return new Promise(resolve=> setTimeout(resolve, ms));
}
let currentStep= "askUsername";
let username = "";
submitBtn.addEventListner("click", async () =>{
  const input = userInput.value.trim();
  userinput.value = "";
  if (username==="askUsername"){
    username=input;
    if (username==="student" || username==="teacher"){
      print("Thank You");
      await sleep (1000);
      print("Please input your password:");
      currentStep = "askPassword";
    }else{
      print("Incorrect username. Please refresh page and try again.");
      currentStep="end";
    }
  } else if(currentStep==="askPassword"){
      const password1=input;
      if(username==="student" && password1==="123456"){
          print("You are logged in as a Student.");
          document.getElementByld("main-link").style.display="block";
      }else if (username==="teacher" && password1==="querty"){
          print (You are logged in as a teacher");
           document.getElementByld("main-link").style.display="block";
      }else{
          print("incorrect password");
          await sleep(1500);
          print("Refresh page and try again");
      }
      currentStep="end";
  }else of (curentStep==="end"){
      print("Session finished. Refresh page to try again");
  });
print("Log-in Page \n\nWelcome! Please enter your username:");
      
