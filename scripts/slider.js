const handle = document.getElementById('sliderHandle');
const track = document.querySelector('.slider-track');
const text = document.getElementById('sliderText');

let dragging = false;
let startX = 0;
let startLeft = 0;

handle.addEventListener('pointerdown', (e) => {
  dragging = true;
  startX = e.clientX;
  startLeft = handle.offsetLeft;
  handle.setPointerCapture(e.pointerId);
});

document.addEventListener('pointermove', (e) => {
  if (!dragging) return;
  
  const maxLeft = track.clientWidth - handle.offsetWidth - 8;
  const newLeft = Math.max(8, Math.min(startLeft + (e.clientX - startX), maxLeft));
  handle.style.left = newLeft + 'px';
});

document.addEventListener('pointerup', () => {
  if (!dragging) return;
  dragging = false;
  
  const maxLeft = track.clientWidth - handle.offsetWidth - 8;
  const threshold = maxLeft * 0.75;
  
  if (handle.offsetLeft >= threshold) {
    handle.style.left = maxLeft + 'px';
    text.textContent = 'Swap Complete';
    track.style.background = '#2a2a2a';
  } else {
    handle.style.left = '8px';
    text.textContent = 'Slide to Swap';
    track.style.background = '#1a1a1a';
  }
});
