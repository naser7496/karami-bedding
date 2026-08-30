const themeToggleBtn = document.getElementById('theme-toggle');
const icon = themeToggleBtn.querySelector('i');

// بررسی تم ذخیره‌شده
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    icon.classList.replace('fa-moon', 'fa-sun');
  }
}

// تغییر تم
themeToggleBtn.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    icon.classList.replace('fa-sun', 'fa-moon');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    icon.classList.replace('fa-moon', 'fa-sun');
  }
});