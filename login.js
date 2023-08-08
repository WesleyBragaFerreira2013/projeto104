function Login() {
    userName = document.getElementById("playername").value;
    localStorage.setItem("user_name", userName);

    window.location = "gamepage.html";
}