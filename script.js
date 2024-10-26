function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}

const themeButton = document.createElement('button');
themeButton.innerText = "Toggle Theme";
themeButton.style.position = "fixed";
themeButton.style.top = "20px";
themeButton.style.right = "20px";
themeButton.style.padding = "10px";
themeButton.style.border = "none";
themeButton.style.borderRadius = "5px";
themeButton.style.cursor = "pointer";
themeButton.style.backgroundColor = "#007bff";
themeButton.style.color = "#fff";
themeButton.addEventListener('click', toggleTheme);
document.body.appendChild(themeButton);

window.addEventListener('load', () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = 1;
    }, 100);
});
