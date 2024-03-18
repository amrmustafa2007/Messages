document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('massageForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const message = document.getElementById('message').value;

    if (message.trim() !== '') {
      sendMessage(message);
    } else {
      alert('Please enter a message.');
    }
  });
});

function sendMessage(message) {
  // يمكنك هنا استخدام fetch أو XMLHttpRequest لإرسال البيانات للخادم
  // في هذا المثال، سنستخدم fetch لأداء ذلك
  fetch('https://example.com/api/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: message })
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully.');
      } else {
        throw new Error('Failed to send message.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
    });
}