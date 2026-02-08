// Удалите внешние теги <script>
function initializeTriggers() {
    const stored = localStorage.getItem('triggers');
    if (!stored) {
        const defaultTriggers = [
            { event: "Конец испытательного срока", condition: "3 дня до окончания", recipient: "Менеджер", action: "Отправить форму фидбека" },
            { event: "День рождения", condition: "В день ДР", recipient: "Slack", action: "Отправить поздравление" }
        ];
        localStorage.setItem('triggers', JSON.stringify(defaultTriggers));
    }
}

function renderTriggers() {
    const triggerList = document.getElementById('triggerList');
    const stored = localStorage.getItem('triggers');
    const triggers = stored ? JSON.parse(stored) : [];

    triggerList.innerHTML = "<h3>Существующие триггеры</h3>";
    triggers.forEach(trigger => {
        const div = document.createElement('div');
        div.className = 'trigger';
        div.innerHTML = `<strong>${trigger.event}</strong><br>${trigger.condition} → ${trigger.action} (${trigger.recipient})`;
        triggerList.appendChild(div);
    });
}

function saveTrigger() {
    const event = document.getElementById('eventInput').value;
    const condition = document.getElementById('conditionInput').value;
    const recipient = document.getElementById('recipientInput').value;
    const action = document.getElementById('actionInput').value;

    if (event && condition && recipient && action) {
        const trigger = { event, condition, recipient, action };
        const stored = localStorage.getItem('triggers');
        const triggers = stored ? JSON.parse(stored) : [];
        triggers.push(trigger);
        localStorage.setItem('triggers', JSON.stringify(triggers));

        renderTriggers();

        // Очистка формы
        document.getElementById('conditionInput').value = '';
        document.getElementById('recipientInput').value = '';
        document.getElementById('actionInput').value = '';
        document.querySelector('.form').style.display = 'none';
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
}

// Добавляем обработчик DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initializeTriggers();
    renderTriggers();
});
// ...existing code...

function openModal() {
    const modal = document.getElementById('modalWindow');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modalWindow');
    modal.style.display = 'none';
}

function saveTrigger() {
    const event = document.getElementById('eventInput').value;
    const condition = document.getElementById('conditionInput').value;
    const recipient = document.getElementById('recipientInput').value;
    const action = document.getElementById('actionInput').value;

    if (event && condition && recipient && action) {
        const trigger = { event, condition, recipient, action };
        const stored = localStorage.getItem('triggers');
        const triggers = stored ? JSON.parse(stored) : [];
        triggers.push(trigger);
        localStorage.setItem('triggers', JSON.stringify(triggers));

        renderTriggers();

        // Очистка формы
        document.getElementById('conditionInput').value = '';
        document.getElementById('recipientInput').value = '';
        document.getElementById('actionInput').value = '';
        closeModal();
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('modalWindow');
    if (event.target === modal) {
        closeModal();
    }
}

// Добавляем обработчик DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initializeTriggers();
    renderTriggers();
});