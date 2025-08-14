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

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("dragstart", e => e.preventDefault());
document.addEventListener("keydown", e => {
  const key = e.key.toLowerCase();
  if (
    (e.ctrlKey && (key === "s" || key === "u" || key === "p")) ||
    key === "f12" ||
    (e.ctrlKey && e.shiftKey && (key === "i" || key === "j"))
  ) {
    e.preventDefault();
    e.stopPropagation();
  }
});
