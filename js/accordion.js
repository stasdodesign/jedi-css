// accordion.js

// Функция для управления аккордеоном
document.querySelectorAll('.accordion').forEach((accordion) => {
  accordion.addEventListener('click', () => {
    // Переключить активное состояние на текущем аккордеоне
    accordion.classList.toggle('active');

    // Получить соответствующую панель
    const panel = accordion.nextElementSibling;

    // Переключить видимость панели
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
