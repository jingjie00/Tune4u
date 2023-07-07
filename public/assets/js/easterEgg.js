const createEasterEgg = () => {
  const easterEgg = document.createElement("img");
  const easterEggContainer = document.getElementById("easterEgg"); //places to appear egg

  easterEgg.src = "./assets/img/easterEgg.png";
  easterEgg.classList.add("easter-egg", "animate-in");

  easterEgg.addEventListener("click", (event) => {
    event.currentTarget.classList.add("break");

    party.confetti(event.currentTarget, {
      spread: 25,
      size: 0.7,
      count: 40,
    });
  });

  easterEggContainer.append(easterEgg);

  setTimeout(() => easterEgg.classList.remove("animate-in"), 300);

  let score = localStorage.getItem("score");
  if (score) {
    if (score === 0) score = 4;
    else {
      // Data exists in Local Storage
      console.log("Data found:", score);
      score = Number(score) + 4;
      localStorage.setItem("score", score);
    }
  } else {
    // Data does not exist in Local Storage
    console.log("No data found in Local Storage.");
    localStorage.setItem("score", 0);
  }
};

const testing = () => {
  createEasterEgg();
};
