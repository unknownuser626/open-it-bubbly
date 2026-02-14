const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const question = document.getElementById("question");
const celebration = document.getElementById("celebration");

let yesLocked = false;

/* ---------- YES BUTTON ---------- */
yesBtn.addEventListener("click", (e) => {
  if (yesLocked) return; // 🚫 block accidental triggers

  document.body.classList.add("celebrate");
  question.classList.add("hidden");
  celebration.classList.remove("hidden");

  startHearts();
});

/* ---------- NO BUTTON (ANTI-GHOST CLICK) ---------- */
noBtn.addEventListener("touchstart", handleNo, { passive: false });
noBtn.addEventListener("mousedown", handleNo);

function handleNo(e) {
  e.preventDefault();
  e.stopPropagation();

  lockYes();       // 🔒 temporarily disable YES
  moveNo();
}

/* ---------- LOCK YES BUTTON ---------- */
function lockYes() {
  yesLocked = true;
  yesBtn.style.pointerEvents = "none";

  setTimeout(() => {
    yesLocked = false;
    yesBtn.style.pointerEvents = "auto";
  }, 300); // ⏱️ safe delay
}

/* ---------- MOVE NO BUTTON ---------- */
function moveNo() {
  noBtn.style.position = "fixed";

  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

/* ---------- HEARTS ---------- */
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
