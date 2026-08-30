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

// Interactive Comments System
const commentForm = document.getElementById('comment-form');
const commentsList = document.getElementById('comments-list');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('user-name');
  const commentInput = document.getElementById('user-comment');

  if (nameInput.value.trim() && commentInput.value.trim()) {
    const newComment = document.createElement('div');
    newComment.classList.add('comment-item');

    newComment.innerHTML = `
      <h4>${nameInput.value}</h4>
      <p>${commentInput.value}</p>
    `;

    commentsList.prepend(newComment);

    // Clear Inputs
    nameInput.value = '';
    document.getElementById('user-contact').value = '';
    commentInput.value = '';
  }
});
