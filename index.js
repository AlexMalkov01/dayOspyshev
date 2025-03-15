document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var attendance = document.querySelector('input[name="attendance"]:checked').value;

    var message = `Свадьба 20.06.2025\nЧеловек: ${name}\nПрисутствие: ${attendance === 'yes' ? 'Да' : 'Нет'}`;

    // Ваш токен бота
    var token = '7547335538:AAH6EkuQ0T0sQ0Oy_aM868Vnj6JXvfu2e44'; // Замените на свой токен
    // Ваш chat_id (например, @username или chat_id)
    var chatId = '556280275'; // Замените на свой chat_id или username

    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            alert('Сообщение отправлено в Telegram!');
        })
        .catch(error => {
            alert('Ошибка: ' + error);
        });
});
