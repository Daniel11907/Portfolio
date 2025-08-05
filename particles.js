tsParticles.load("tsparticles", {
  background: {
    color: "#000"
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: { enable: false },
      onclick: { enable: false }
    }
  }
});

const loginBtn = document.querySelector('.btn[href="#"]:nth-child(3)');
const modal = document.getElementById('loginModal');
const closeBtn = modal.querySelector('.close');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('passwordInput');
const errorMsg = document.getElementById('errorMsg');
const loadingSpinner = document.getElementById('loadingSpinner');
const loginButton = document.getElementById('loginBtn');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

togglePassword.addEventListener('click', () => {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = this.elements[0].value.trim();
  const password = this.elements[1].value.trim();
  const remember = document.getElementById('rememberMe').checked;

  errorMsg.style.display = "none";

  if (!username || !password) {
    errorMsg.textContent = "Both fields are required.";
    errorMsg.style.display = "block";
    return;
  }

  loadingSpinner.style.display = "block";
  loginButton.disabled = true;

  setTimeout(() => {
    loadingSpinner.style.display = "none";
    loginButton.disabled = false;

    if (username === "admin" && password === "1234") {
      alert(`Welcome back, ${username}!\nRemember Me: ${remember}`);
      modal.style.display = 'none';
    } else {
      errorMsg.textContent = "Invalid username or password.";
      errorMsg.style.display = "block";
    }
  }, 1500);
});
