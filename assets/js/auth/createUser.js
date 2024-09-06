//register inputs
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

//register btn

const register = document.querySelector("#register");

// get user value
let userName = "";
let Email = "";
let pwd = "";

// FOR REGISTER USER ACCOUNT

// username

username.addEventListener("change", (e) => {
  userName = e.target.value;
});

//  email

email.addEventListener("change", (e) => {
  Email = e.target.value;
});

// password
password.addEventListener("change", (e) => {
  pwd = e.target.value;
});

register.addEventListener("click", () => {
  if (userName != null && Email != null && pwd != null) {
    const userInfo = {
      username: userName,
      email: Email,
      password: pwd,
    };

    const userInfoJson = JSON.stringify(userInfo);

    localStorage.setItem("userInfo", userInfoJson);

    location.href = "index.html";
  }
});

// END OF REGISTER ACCOUNT
