const main = document.querySelector('.main');
const btn = document.querySelector('.btn');

const contain = document.querySelector('Tutorial');
const tutbtn = document.querySelector('tutbtn');

btn.addEventListener('click', ()=> {
    main.classList.add('active-login');
});

tutbtn.addEventListener('click', ()=> {
    contain.classList.add('active');
});

var userAcc =[
    {
        user:"..",
        pass:""
    },
    {
        user:"Kertz",
        pass:"kertz"
    }
]
var entrycount = 0;

function enter() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    for(i = 1; i < userAcc.length; i++) {
            
        if (user == userAcc[i].user && pass == userAcc[i].pass) {
            window.location.href="homepage.html"; 
        }

        if (user !== userAcc[i].user && pass !== userAcc[i].pass) {
            window.alert('The Username or Password is invalid');
            entrycount++
        }
        if (entrycount >= 3) {
            window.alert('You have reached the 3 attempts limit! \nPlease try again later.');
        }
    }
}

function Play() {
    window.location.href="game.html";
}


