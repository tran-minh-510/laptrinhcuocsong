const header = document.querySelector('header')
const iconMenu = document.querySelector('.header-icon i')
const listMenu = document.querySelector('.header-menu')
const body = document.querySelector('.body')

window.onload = (event) => {
    listMenu.style.top = header.offsetHeight + 'px';
    body.style.marginTop = header.offsetHeight + 'px';
  };

iconMenu.onclick = function () {
    console.log(123)
    if (listMenu.classList.contains('appear')) {
        listMenu.classList.remove('appear')
        listMenu.classList.add('hidden')
        setTimeout(() => {
            listMenu.style.display = 'none';
        }, 500);
    } else {
        listMenu.style.display = 'block';
        listMenu.classList.remove('hidden')
        listMenu.classList.add('appear')
    }
}

