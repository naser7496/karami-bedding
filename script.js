// Theme Toggle Logic (Day/Night Mode)
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

// Check saved theme from LocalStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Toggle Click Listener
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }
});

// Interactive Article Addition
const articleForm = document.getElementById('article-form');
const articlesGrid = document.getElementById('articles-grid');

articleForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const titleInput = document.getElementById('article-title');
  const contentInput = document.getElementById('article-content');

  if (titleInput.value.trim() && contentInput.value.trim()) {
    const newArticle = document.createElement('article');
    newArticle.classList.add('article-card');

    newArticle.innerHTML = `
      <h3>${titleInput.value}</h3>
      <p>${contentInput.value}</p>
      <span class="read-more">ادامه مطلب <i class="fa-solid fa-arrow-left"></i></span>
    `;

    articlesGrid.prepend(newArticle);

    // Reset Form
    titleInput.value = '';
    contentInput.value = '';
  }
});
