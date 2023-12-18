// loading.js
var percent = document.querySelector('.percent');
var progress = document.querySelector('.progress');
var count = 4;
var per = 16;
var loading = setInterval(animate, 48);

function animate() {
    if (count == 100 && per == 400) {
        clearInterval(loading);
        // Show the Start button when the loading is complete
        document.querySelector('.btn').style.display = 'block';
        percent.style.display = 'none';  // Hide the percentage text
        document.querySelector('.progress-bar').hidden = true;
    } else {
        per = per + 4;
        count = count + 1;
        progress.style.width = per + 'px';
        percent.textContent = count + '%';
    }
}
