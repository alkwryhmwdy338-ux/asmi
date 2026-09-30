const sliderTrack = document.getElementById('sliderTrack');
const sliderKnob = document.getElementById('sliderKnob');

const trackWidth = () => sliderTrack.clientWidth - sliderKnob.offsetWidth - 16;
let dragging = false;
let startX = 0;
let currentX = 0;

function setKnobPosition(x) {
  const maxX = trackWidth();
  const nextX = Math.min(Math.max(x, 8), maxX + 8);
  sliderKnob.style.left = `${nextX}px`;

  const threshold = maxX * 0.9;
  sliderTrack.classList.toggle('is-full', nextX >= threshold);
}

sliderKnob.addEventListener('pointerdown', (event) => {
  dragging = true;
  startX = event.clientX;
  currentX = parseFloat(getComputedStyle(sliderKnob).left) || 8;
  sliderTrack.classList.add('is-dragging');
  sliderKnob.setPointerCapture(event.pointerId);
});

sliderKnob.addEventListener('pointermove', (event) => {
  if (!dragging) return;
  const deltaX = event.clientX - startX;
  setKnobPosition(currentX + deltaX);
});

sliderKnob.addEventListener('pointerup', () => {
  if (!dragging) return;
  dragging = false;
  const maxX = trackWidth() + 8;
  const currentLeft = parseFloat(getComputedStyle(sliderKnob).left) || 8;

  if (currentLeft >= maxX * 0.82) {
    setKnobPosition(maxX);
    sliderTrack.style.background = 'linear-gradient(90deg, rgba(38, 43, 49, 0.98), rgba(18, 23, 28, 0.94))';
    sliderTrack.querySelector('.slider-text').textContent = 'Swap Complete';
  } else {
    setKnobPosition(8);
    sliderTrack.style.background = 'rgba(28, 32, 37, 0.94)';
    sliderTrack.querySelector('.slider-text').textContent = 'Slide to Swap';
  }

  sliderTrack.classList.remove('is-dragging');
});

sliderKnob.addEventListener('pointerleave', () => {
  if (dragging) {
    sliderKnob.dispatchEvent(new PointerEvent('pointerup', { bubbles: true }));
  }
});

window.addEventListener('resize', () => {
  setKnobPosition(8);
  sliderTrack.style.background = 'rgba(28, 32, 37, 0.94)';
  sliderTrack.querySelector('.slider-text').textContent = 'Slide to Swap';
});

setKnobPosition(8);
