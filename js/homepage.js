/* Game button */
function Play() {
  window.location.href="loading.html";
}

/* Tutorial */
const main = document.querySelector('.main');
const btn = document.querySelector('.tutbtn');

btn.addEventListener('click', ()=> {
    main.classList.add('active-Tutorial');
});