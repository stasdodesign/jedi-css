// tabs.js

// Функция для показа вкладок
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const tabLinks = document.querySelectorAll('.tab-link');

  // Скрыть все вкладки и убрать активный класс с кнопок
  tabs.forEach((tab) => {
    tab.style.display = 'none'; // Скрыть вкладку
    tab.classList.remove('active');
  });

  tabLinks.forEach((link) => {
    link.classList.remove('active');
  });

  // Показать выбранную вкладку и добавить активный класс к кнопке
  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.style.display = 'block'; // Показать вкладку
    activeTab.classList.add('active');
  }
  document.querySelector(`.tab-link[data-tab="${tabId}"]`).classList.add('active');
}

// Добавление обработчиков событий для всех ссылок вкладок
document.querySelectorAll('.tab-link').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращение перехода по ссылке
    const tabId = link.getAttribute('data-tab');
    showTab(tabId);
  });
});