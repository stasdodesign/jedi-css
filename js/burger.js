document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.getElementById('burger-btn');
  const mainNav = document.querySelector('.main-nav');
  const subNav = document.querySelector('.sub-nav');
  const overlay = document.getElementById('overlay');
  const mainHeader = document.querySelector('.main-header');

  // Открытие/закрытие меню
  burgerBtn.addEventListener('click', function () {
    mainNav.classList.toggle('active'); // Переключить видимость основного меню
    subNav.classList.toggle('active'); // Переключить видимость подменю
    overlay.classList.toggle('active'); // Переключить видимость затемнения
    mainHeader.classList.toggle('burger-active'); // Переключить класс для скрытия логотипа
  });

  // Закрытие меню при клике на overlay
  overlay.addEventListener('click', function () {
    mainNav.classList.remove('active');
    subNav.classList.remove('active');
    overlay.classList.remove('active');
    mainHeader.classList.remove('burger-active'); // Убедиться, что логотип возвращается
  });
});