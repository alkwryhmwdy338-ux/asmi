const slider = document.querySelector('.slider');
const handle = document.getElementById('sliderHandle');
const text = document.getElementById('sliderText');

let isDragging = false;
let startX = 0;
let offsetX = 0;

handle.addEventListener('pointerdown', (e) => {
  isDragging = true;
  startX = e.clientX;
  offsetX = handle.offsetLeft;
  handle.setPointerCapture(e.pointerId);
  handle.style.transition = 'none';
});

document.addEventListener('pointermove', (e) => {
  if (!isDragging) return;
  
  const maxDistance = slider.clientWidth - handle.offsetWidth - 8;
  let newLeft = offsetX + (e.clientX - startX);
  newLeft = Math.max(8, Math.min(newLeft, maxDistance));
  
  handle.style.left = newLeft + 'px';
});

document.addEventListener('pointerup', () => {
  if (!isDragging) return;
  isDragging = false;
  handle.style.transition = 'left 0.3s ease';
  
  const maxDistance = slider.clientWidth - handle.offsetWidth - 8;
  const threshold = maxDistance * 0.8;
  
  if (handle.offsetLeft >= threshold) {
    handle.style.left = maxDistance + 'px';
    text.textContent = 'Swap Complete';
    slider.style.background = '#2a2a2a';
  } else {
    handle.style.left = '8px';
    text.textContent = 'Slide to Swap';
    slider.style.background = '#1a1a1a';
  }
});

function swapTokens() {
  handle.style.left = '8px';
  text.textContent = 'Slide to Swap';
  slider.style.background = '#1a1a1a';
}
