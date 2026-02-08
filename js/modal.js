document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modal = document.getElementById('modalWindow');

  // Открытие модального окна
  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  // Закрытие модального окна
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Закрытие модального окна при клике вне его содержимого
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});