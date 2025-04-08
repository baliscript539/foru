function openEnvelope() {
  document.querySelector('.envelope').style.display = 'none';
  showHearts();
  showMessage();
}

function showHearts() {
  const container = document.getElementById('hearts');
  for (let i = 0; i < 20; i++) {
    const heart = document
