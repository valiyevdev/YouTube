function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  const extraSections = document.querySelectorAll('.extra-section');
  const ytLogo = document.querySelector('.yt-logo');

  if (window.innerWidth < 768) {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  } else {
    sidebar.classList.toggle('collapsed');
    extraSections.forEach(sec => sec.classList.toggle('extra-hidden'));
    ytLogo.classList.toggle('extra-hidden');
  }
}


// profile oynasi js

const profileBtn = document.getElementById("profileBtn");
const dropdown = document.getElementById("dropdown");

profileBtn.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});

// tashqariga bosganda yopiladi
window.addEventListener("click", (e) => {
  if (!profileBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add("hidden");
  }
});




// create oynasi js
const createBtn = document.getElementById("createBtn");
const createDropdown = document.getElementById("createDropdown");

// tugmani bosganda dropdown chiqadi
createBtn.addEventListener("click", () => {
  createDropdown.classList.toggle("hidden");
});

// tashqariga bosganda yopiladi
window.addEventListener("click", (e) => {
  if (!createBtn.contains(e.target) && !createDropdown.contains(e.target)) {
    createDropdown.classList.add("hidden");
  }
});



// notification oynasi js
const notifyBtn = document.getElementById("notifyBtn");
const notifyPanel = document.getElementById("notifyPanel");

// tugmani bosganda panel chiqadi
notifyBtn.addEventListener("click", () => {
  notifyPanel.classList.toggle("hidden");
});

// tashqariga bosganda yopiladi
window.addEventListener("click", (e) => {
  if (!notifyBtn.contains(e.target) && !notifyPanel.contains(e.target)) {
    notifyPanel.classList.add("hidden");
  }
});



// microphone oynasi 

const micBtn = document.getElementById("micBtn");
    const voiceModal = document.getElementById("voiceModal");

    // Mikrofon tugmasi bosilganda modal ochiladi
    micBtn.addEventListener("click", () => {
      voiceModal.classList.remove("hidden");
    });

    // Modal tashqarisiga bosilganda yopiladi
    voiceModal.addEventListener("click", () => {
      voiceModal.classList.add("hidden");
    });