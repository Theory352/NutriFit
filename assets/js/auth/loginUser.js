// Login inputs
const LoginEmail = document.getElementById("loginEmail");
const LoginPassword = document.getElementById("loginPassword");

// Login button
const login = document.querySelector("#login");

// FOR LOGIN VALIDATION ACCOUNT
let existUserInfo = localStorage.getItem("userInfo");
let destructUsr = JSON.parse(existUserInfo);

login.addEventListener("click", () => {
    const emailValue = LoginEmail.value.trim();
    const passwordValue = LoginPassword.value.trim();

    if (emailValue && passwordValue) {
    
        if ((emailValue === destructUsr.username || emailValue === destructUsr.email) &&
            passwordValue === destructUsr.password) {
            
                location.href="index.html"
        } else {
            alert("Incorrect email or password");
        }
        
    } else {
        alert("Please enter both email and password");
    }
});
