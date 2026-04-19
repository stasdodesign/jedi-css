document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.getElementById('burger-btn');
  const mainNav = document.querySelector('.main-nav');
  const subNav = document.querySelector('.sub-nav');
  const overlay = document.getElementById('overlay');
  const mainHeader = document.querySelector('.main-header');

  // Открытие/закрытие меню
  burgerBtn.addEventListener('click', function () {
    mainNav.classList.toggle('active'); // Переключить видимость основного меню
    if (subNav) subNav.classList.toggle('active'); // Переключить видимость подменю
    overlay.classList.toggle('active'); // Переключить видимость затемнения
    mainHeader.classList.toggle('burger-active'); // Переключить класс для скрытия логотипа
  });

  // Закрытие меню при клике на overlay
  overlay.addEventListener('click', function () {
    mainNav.classList.remove('active');
    if (subNav) subNav.classList.remove('active');
    overlay.classList.remove('active');
    mainHeader.classList.remove('burger-active'); // Убедиться, что логотип возвращается
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const dropBtn = document.getElementById('mobile-dropdown-btn');
  const subNavList = document.getElementById('sub-nav-list');
  
  if (dropBtn && subNavList) {
    // Открытие/закрытие
    dropBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      subNavList.classList.toggle('active');
    });

    // Закрываем меню при клике мимо него
    document.addEventListener('click', function(e) {
      if (!dropBtn.contains(e.target) && !subNavList.contains(e.target)) {
        subNavList.classList.remove('active');
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('jedi-btn');
  const list = document.getElementById('jedi-list');
  const wrapper = document.querySelector('.jedi-mobile-wrapper');
  
  // Находим все якорные ссылки внутри мобильного меню
  const anchorLinks = document.querySelectorAll('.jedi-link');

  if(btn && list && wrapper) {
    // 1. Открытие/закрытие по кнопке
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      list.classList.toggle('active');
      wrapper.classList.toggle('is-open');
    });

    // 2. Закрытие при клике мимо меню
    document.addEventListener('click', function(e) {
      if(!wrapper.contains(e.target)) {
        list.classList.remove('active');
        wrapper.classList.remove('is-open');
      }
    });

    // 3. ЗАКРЫТИЕ ПРИ КЛИКЕ НА САМУ ССЫЛКУ (Для якорной навигации)
    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        list.classList.remove('active');
        wrapper.classList.remove('is-open');
      });
    });
  }
});