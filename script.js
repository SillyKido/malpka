let progress = 0;

function increaseProgress() {
  const progressBar = document.getElementById("progress-bar");
  
  if (progress < 100) {
    progress += 10; // Incrementa la barra de progreso en un 10%
    progressBar.style.width = progress + "%";
    progressBar.textContent = progress + "%";
  }
  
  if (progress === 100) {
    alert("¡Nivel Completo!");
  }
}

function resetProgress() {
  const progressBar = document.getElementById("progress-bar");
  progress = 0;
  progressBar.style.width = progress + "%";
  progressBar.textContent = progress + "%";
}
