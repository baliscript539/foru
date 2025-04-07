function openEnvelope() {
  document.querySelector('.envelope').style.display = 'none';
  showHearts();
  showMessage();
}

function showHearts() {
  const container = document.getElementById('hearts');
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = Math.random() * 100 + '%';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heart.style.animation = 'floatUp 2s ease forwards';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}

function showMessage() {
  const text = "Hai, Cintaku! ❤️\nAku cuma mau bilang satu hal penting... Kamu itu spesial banget! Dan aku bersyukur punya kamu di hidupku.";
  const messageBox = document.getElementById('message');
  const replyBtn = document.getElementById('reply');
  messageBox.classList.remove('hidden');
  replyBtn.classList.remove('hidden');
  let i = 0;

  function typing() {
    if (i < text.length) {
      messageBox.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 60);
    }
  }
  typing();
}
