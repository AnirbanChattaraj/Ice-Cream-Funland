function choose(name) {
  const messages = [
    "Yay! Best choice ever 😍",
    "That scoop is full of joy 🍭",
    "Sweetness unlocked 🌈",
    "You're a real ice-cream expert 🍧",
    "Woohoo! Happiness activated ✨",
    "Mmm... that's delicious 🤤"
  ];

  const msg = messages[Math.floor(Math.random() * messages.length)];

  const box = document.getElementById("messageBox");
  box.style.display = "block";
  box.textContent = "🍦 " + name + " — " + msg;

 
  createConfetti();
}


function createConfetti() {
  for (let i = 0; i < 20; i++) {
    let dot = document.createElement("div");
    dot.classList.add("confetti");
    document.body.appendChild(dot);
    dot.style.left = Math.random() * 100 + "vw";
    dot.style.animationDuration = (Math.random() * 1 + 1) + "s";
    dot.style.background = `hsl(${Math.random() * 360}, 100%, 65%)`;
    setTimeout(() => dot.remove(), 1500);
  }
}


const css = document.createElement("style");
css.innerHTML = `
.confetti {
  position: fixed;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  top: -10px;
  animation: fall linear forwards;
}
@keyframes fall {
  to { transform: translateY(110vh) rotate(720deg); }
}`;
document.head.appendChild(css);
