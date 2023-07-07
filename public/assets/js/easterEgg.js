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
};

const testing = () => {
  createEasterEgg();
};
