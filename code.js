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
let pass = document.querySelector('#password');
let
function enter() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    for(i = 1; i<userAcc.length; i++) {
        if(user == userAcc[i].user && pass == userAcc[i].pass) {
            window.alert("The username " + user + " is logged in.");
        }

            window.alert("The Username or Password is Incorrect");
    }       
}
