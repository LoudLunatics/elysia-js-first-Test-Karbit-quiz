document.addEventListener("DOMContentLoaded", () => {

  const questions = [
    {
      image: "images/kaoru.jpg",
      correct: "C",
      options: {
        A: "Furina",
        B: "Alya",
        C: "Kaoru",
        D: "Tachyon"
      }
    },
    {
      image: "images/tachyon.jpg",
      correct: "D",
      options: {
        A: "Furina",
        B: "Alya",
        C: "Kaoru",
        D: "Tachyon"
      }
    },
    {
      image: "images/alya.jpg",
      correct: "B",
      options: {
        A: "Furina",
        B: "Alya",
        C: "Kaoru",
        D: "Tachyon"
      }
    },
    {
      image: "images/furina.jpg",
      correct: "A",
      options: {
        A: "Furina",
        B: "Alya",
        C: "Kaoru",
        D: "Tachyon"
      }
    }
  ];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffleArray(questions);

  let current = 0;
  let isLocked = false;

  const imageEl = document.getElementById("anime-image");
  const resultEl = document.getElementById("result");
  const buttons = ["A", "B", "C", "D"];

  function loadQuestion() {
    const q = questions[current];

    imageEl.src = q.image;
    resultEl.textContent = "";
    resultEl.style.color = "";

    isLocked = false;

    buttons.forEach(key => {
      const btn = document.getElementById(key);
      btn.textContent = q.options[key];
      btn.disabled = false;
    });

    console.log("Soal ke:", current);
  }

  window.checkAnswer = function (choice) {
    if (isLocked) return;
    isLocked = true;

    const q = questions[current];

    if (choice === q.correct) {
      resultEl.textContent = "✅ Benar!";
      resultEl.style.color = "lime";

      setTimeout(() => {
        current++;
        if (current >= questions.length) {
          alert("🎉 Quiz selesai!");
          current = 0;
        }
        loadQuestion();
      }, 800);

    } else {
      resultEl.textContent = "❌ Salah!";
      resultEl.style.color = "red";

      setTimeout(() => {
        alert("Jawaban salah 😅 coba lagi!");
        isLocked = false;
      }, 300);
    }
  };

  loadQuestion();
});
