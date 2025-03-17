document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark Mode';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '10px';
    toggleButton.style.right = '10px';
    toggleButton.style.padding = '10px';
    toggleButton.style.backgroundColor = 'black';
    toggleButton.style.color = 'white';
    toggleButton.style.border = 'none';
    toggleButton.style.cursor = 'pointer';

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    document.body.appendChild(toggleButton);
});