function addUser() {
    user_name = document.getElementById("user_name");
    localStorage.setItem("userName", user_name);
    window.location.replace("● Kwitter_room.html");
}