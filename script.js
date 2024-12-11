
function updateDateTime(){
    now = new Date();
    const currentDateTime = now.toLocaleString();
    document.querySelector("#day").textContent = currentDateTime;
    
}

setInterval(updateDateTime, 1000);


function rollSingleDice() {
  const randomDice = Math.floor(Math.random() * 6) + 1;
  return randomDice;
}

function rollDice() {
  const result1 = rollSingleDice();
  const result2 = rollSingleDice();

  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");

 
  dice1.src = `dice-${result1}.svg`;
  dice2.src = `dice-${result2}.svg`;

 
  dice1.classList.add("roll");
  dice2.classList.add("roll");

  setTimeout(() => {
    dice1.classList.remove("roll");
    dice2.classList.remove("roll");
  }, 500);
}

const rollButton = document.getElementById("btn");
rollButton.addEventListener("click", rollDice);


