const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    { message: 'Toast is ready 🍞', type: 'info' },
    { message: 'Success ✅', type: 'success' },
    { message: 'Warning ⚠', type: 'warn' },
    { message: 'Alert ⛔', type: 'alert' },
]

button.addEventListener('click', createNotification);

function createNotification() {
    let tempMessage = getRandomMessage();
    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.classList.add(tempMessage.type);
    notification.innerText = tempMessage.message;

    toasts.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}