// Simple interactivity: greeting and theme toggle
document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('nameInput');
  const sayBtn = document.getElementById('sayHello');
  const greeting = document.getElementById('greeting');
  const themeToggle = document.getElementById('themeToggle');

  // Greeting based on time
  const hour = new Date().getHours();
  if(hour < 12) greeting.textContent = 'Selamat Pagi!';
  else if(hour < 17) greeting.textContent = 'Selamat Siang!';
  else greeting.textContent = 'Selamat Malam!';

  // Say hello button
  sayBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    greeting.textContent = name ? `Halo, ${name}!` : 'Halo!';
    nameInput.value = '';
    nameInput.focus();
  });

  // Theme toggle (persist in localStorage)
  const applyTheme = (isDark) => {
    if(isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('darkTheme', isDark ? '1' : '0');
  };
  const saved = localStorage.getItem('darkTheme') === '1';
  applyTheme(saved);
  themeToggle.addEventListener('click', () => applyTheme(!document.documentElement.classList.contains('dark')));
});