document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var attendance = document.querySelector('input[name="attendance"]:checked').value;
    
    var message = `Свадьба 20.06.2025\nЧеловек: ${name}\nПрисутствие: ${attendance === 'yes' ? 'Да' : 'Нет'}`;
    
    // Ваш токен бота
    var token = '7776002140:AAHiDsgq41zeK6cEY9y7Dzl0F9ZEFvxrR_k'; // Замените на свой токен
    // Ваш chat_id (например, @username или chat_id)
    var chatId = '804088155'; // Замените на свой chat_id или username
    
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
    .then(response => response.json())
        .then(data => {
            alert('Сообщение отправлено в Telegram!');
        })
        .catch(error => {
            alert('Ошибка: ' + error);
        })
        .finally(()=> {
            window.location.href = "/index2.html"
        })
});

function goToNewPage() {
    window.location.href = "/index.html";
}
