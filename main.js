let toTop = document.getElementById('toTop')

window.onscroll = function () {
    if (window.scrollY >= 100) {
        toTop.classList.remove('btnHidden');
        toTop.classList.add('btnShow');
    } else {
        toTop.classList.remove('btnShow');
        toTop.classList.add('btnHidden');
    }
}

toTop.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
}