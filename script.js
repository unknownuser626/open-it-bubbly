const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const question = document.getElementById("question");
const celebration = document.getElementById("celebration");

/* ---------- YES BUTTON ---------- */
yesBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  document.body.classList.add("celebrate");
  question.classList.add("hidden");
  celebration.classList.remove("hidden");

  startHearts();
});

/* ---------- NO BUTTON (ANTI GHOST-CLICK) ---------- */
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();      // stop click-through
  e.stopPropagation();     // stop bubbling
  moveNo();
});

noBtn.addEventListener("click", (e) => {
  e.preventDefault();      // block real clicks
  e.stopPropagation();
  moveNo();
});

/* ---------- MOVE NO BUTTON ---------- */
function moveNo() {
  noBtn.style.position = "fixed";

  const maxX = window.innerWidth - noBtn.offsetWidth - 10;
  const maxY = window.innerHeight - noBtn.offsetHeight - 10;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

/* ---------- HEART ANIMATION ---------- */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 300);
}
