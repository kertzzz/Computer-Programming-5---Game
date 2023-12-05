let attempts = 3;
let locked = false;

function login(username, password) {
  if (locked) {
    console.log("Account is locked. Please try again later.");
    return;
  }

  // Check username and password
  if (username === "yourUsername" && password === "yourPassword") {
    console.log("Login successful");
  } else {
    attempts--;
    if (attempts > 0) {
      console.log("Login failed. You have " + attempts + " attempts left.");
    } else {
      locked = true;
      console.log("Too many failed attempts. Account locked for 1 minute.");
      setTimeout(() => {
        locked = false;
        attempts = 3;
        console.log("Account unlocked. You can try to login again.");
      }, 60000); // 1 minute lock
    }
  }
}