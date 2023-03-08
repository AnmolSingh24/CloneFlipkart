function login(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "Anmol" && password === "password") {
        alert("Login Successful!");
        
    } else {
        alert("Incorrect username or Password");
    }
}