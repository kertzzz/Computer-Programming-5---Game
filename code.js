const main = document.querySelector('.main');
const loginlink = document.querySelector('.login-link');
const signuplink = document.querySelector('.signup-link');
const btn = document.querySelector('.btn');


signuplink.addEventListener('click', ()=> {
    main.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    main.classList.remove('active');
});

btn.addEventListener('click', ()=> {
    main.classList.add('active-login');
});


var entrycount = 0;
var entrylimit = 3;

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

function enter() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    for(i = 1; i<userAcc.length; i++) {

        if (user == userAcc[i].user && pass == userAcc[i].pass) {
            window.location.href="homepage.html"; 
        }

        if (user != userAcc[i].user && pass != userAcc[i].pass) {
            window.alert('The Username or Password is invalid');
            entrycount++;
        }

        if (entrycount >= entrylimit) {
            window.alert("You have entered to many times, try again later");x
        }
    }       
}