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
      
