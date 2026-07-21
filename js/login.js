const loginsection = document.getElementById("loginsection");
const registersection = document.getElementById("registersection");
const toregister = document.getElementById("toregister");
const tologin = document.getElementById("tologin");
const registerform = document.getElementById("registerform");
const loginform = document.getElementById("loginform");

toregister.onclick = function (e) {
    e.preventDefault();
    loginsection.classList.add("hidden");
    registersection.classList.remove("hidden");
};

tologin.onclick = function (e) {
    e.preventDefault();
    registersection.classList.add("hidden");
    loginsection.classList.remove("hidden");
};

registerform.onsubmit = function (e) {
    e.preventDefault();

    let email = document.getElementById("registeremail").value;
    let password = document.getElementById("registerpassword").value;

    localStorage.setItem("useremail", email);
    localStorage.setItem("userpassword", password);

    alert("Account registered successfully!");

    registerform.reset();

    registersection.classList.add("hidden");
    loginsection.classList.remove("hidden");
};

loginform.onsubmit = function (e) {
    e.preventDefault();

    let email = document.getElementById("loginemail").value;
    let password = document.getElementById("loginpassword").value;

    let storedEmail = localStorage.getItem("useremail");
    let storedPassword = localStorage.getItem("userpassword");

    if (email === storedEmail && password === storedPassword) {
        alert("Logged in successfully!");
        loginform.reset();
    } else {
        alert("Incorrect email or password.");
    }
};