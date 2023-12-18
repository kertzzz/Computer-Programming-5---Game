/* login page container */
const main = document.querySelector('.main');
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=> {
    main.classList.add('active-login');
});


/* Hide/Show Password */
const showpass = document.querySelector("#showpass");
const pass = document.querySelector("#password");

showpass.addEventListener("click", function() {
    this.classList.toggle("fa-eye");
    const type = pass.getAttribute("type") === "password" ? "text" : "password";
    pass.setAttribute("type", type);
})



/* Login Account */
let attempts = 0;
let locktime = 59; 
let locked = false;
let countdown;
let button = document.getElementById('btn');

function enter() {
    if (locked) {
        showMessage(`Login locked. Please try again after ${locktime} seconds.`);
        startCountdown();
        return;
    }

const user = document.getElementById('user').value;
const password = document.getElementById('password').value;

    if (user === 'Kertz' && password === 'kertz1234') {
        window.location.href="homepage.html";

    }
    
    else if (user === 'Luke' && password === 'Luke504') {
        window.location.href="homepage.html";

    } else {
        attempts++;

        if (attempts === 3) {
            locked = true;
            startCountdown();
            button.style.display = 'none';
        }
        window.alert("The Username or Password is invalid.");
    }
}

/* Countdown */
function startCountdown() {
    countdown = locktime;
    const countdownInterval = setInterval(() => {
        showMessage(`Login locked. Please try again after ${countdown} seconds.`);
        countdown--;

        if (countdown < 0) {
            locked = false;
            attempts = 0;
            clearInterval(countdownInterval);
            button.style.display = 'block';
            showMessage('');
        }
    }, 1000);
}

function showMessage(message) {
    document.getElementById('text_message').innerText = message;
}


