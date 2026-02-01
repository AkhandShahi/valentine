const PASSWORD = "1803"; // change this

function unlock() {
  const val = document.getElementById("password").value;
  if (val === PASSWORD) {
    go("lock", "p1");
  } else {
    document.getElementById("error").innerText = "Try again 💕";
  }
}

function go(from, to) {
  document.getElementById(from).classList.remove("active");
  document.getElementById(to).classList.add("active");
}

/* NO button runs */
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

function moveNoButton() {
  const x = Math.random() * 200 - 100; // -100 to +100
  const y = Math.random() * 120 - 60;  // -60 to +60

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}


/* YES clicked */
function yesClicked() {
  const music = document.getElementById("bgMusic");
  music.volume = 0;
  music.play();

  let v = 0;
  const fade = setInterval(() => {
    v += 0.05;
    music.volume = v;
    if (v >= 0.8) clearInterval(fade);
  }, 100);

  startRoseFall();

  typeText(
    "Thank you for coming in my black & white life and making it colorful ❤️",
    "typed"
  );

  go("p1", "p2");
}

/* TYPEWRITER */
function typeText(text, id) {
  let i = 0;
  const el = document.getElementById(id);
  el.innerHTML = "";
  const interval = setInterval(() => {
    el.innerHTML += text.charAt(i++);
    if (i === text.length) clearInterval(interval);
  }, 60);
}

/* 🌹 ROSE FALL */
function startRoseFall() {
  const interval = setInterval(() => {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 7000);
  }, 220);

  setTimeout(() => clearInterval(interval), 180000);
}
