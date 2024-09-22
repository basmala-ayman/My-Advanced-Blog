let toTop = document.getElementById('toTop')
// toTop.classList.add('hidden');

window.onscroll = function () {
    if (window.scrollY >= 100) {
        // toTop.style.display = 'block';
        // toTop.style.opacity = '1';
        toTop.classList.remove('hidden');
        toTop.classList.add('show');
    } else {
        toTop.classList.remove('show');
        toTop.classList.add('hidden');
    }
}

toTop.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
}