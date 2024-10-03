export function setupThemeToggle() {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
  
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      
      // Save user preference
      if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = 'Light Mode';
      } else {
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = 'Dark Mode';
      }
    });
  
    // Check for saved user preference, if any, on load of the website
    const savedTheme = localStorage.getItem('theme');
  
    if (savedTheme === 'dark') {
      body.classList.add('dark-theme');
      toggleButton.textContent = 'Light Mode';
    } else {
      toggleButton.textContent = 'Dark Mode';
    }
  }