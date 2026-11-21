const moodMessages = {
  smile: [
    "Tiny reminder: somewhere, someone is hoping your day is going well. (That someone is me.) ♡",
    "If today feels cloudy, I hope this little page is one tiny ray of sunshine.",
    "Official instruction: smile for three seconds. Yep, that's it. You did great."
  ],
  compliment: [
    "You have a way of making conversations feel easy. That's a lovely thing.",
    "You deserve kind words, good food, peaceful days, and all the little things that make you happy.",
    "Just a reminder: you are pretty wonderful, exactly as you are."
  ],
  tired: [
    "It's okay to slow down. You don't have to figure everything out today. Take a breath. ♡",
    "Drink some water, relax your shoulders, and give yourself a little break. You deserve it.",
    "One thing at a time. You're doing better than you think."
  ],
  curious: [
    "Fun fact: you just spent a little time on a website someone made especially for you.",
    "A very serious scientific discovery: little surprises are better when shared.",
    "Plot twist: this message is secretly wishing you a lovely day."
  ]
};

const messageBox = document.querySelector("#mood-message");
const moodCards = document.querySelectorAll(".mood-card");

moodCards.forEach((card) => {
  card.addEventListener("click", () => {
    moodCards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");

    const choices = moodMessages[card.dataset.mood];
    const message = choices[Math.floor(Math.random() * choices.length)];

    messageBox.innerHTML = `<span class="message-sparkle">✧</span><p>${message}</p>`;
  });
});

const vibesButton = document.querySelector("#vibes-button");
const vibesResult = document.querySelector("#vibes-result");
const confettiLayer = document.querySelector("#confetti-layer");
const confettiSymbols = ["♡", "✿", "✦", "✧", "♥"];

vibesButton.addEventListener("click", () => {
  vibesResult.textContent = "Sending you a pocketful of sunshine. Keep being you! ♡";
  for (let i = 0; i < 24; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = confettiSymbols[Math.floor(Math.random() * confettiSymbols.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    piece.style.fontSize = `${14 + Math.random() * 16}px`;
    confettiLayer.appendChild(piece);
    window.setTimeout(() => piece.remove(), 3500);
  }
});

document.querySelector("#back-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
