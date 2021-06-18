const toggleSwitch = document.querySelector('.theme-switch svg[id="dark-mode-switch"]');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.classList.toggle('dark');
          localStorage.setItem('theme', 'light');
    }    
}
toggleSwitch.addEventListener('change', switchTheme, false);
