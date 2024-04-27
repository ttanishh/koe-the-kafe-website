window.addEventListener('scroll', () => {
    const popup = document.getElementById('popup');

    if (window.scrollY > 500) {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
});

document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
});