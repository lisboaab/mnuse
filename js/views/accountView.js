import * as User from "../models/modelUsers.js";

function accountView(){

    User.initUsers()

    let result = `<div class="container">
    <div id="userInfo" class="row">
    <div class="col-2">
    <img id="profilePicture" src="${User.getUserLogged().avatar}">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editAvatarModal" id="editBtn" class="col">
    <img src="../img/edit.png" alt="Edit button">
    </button>
    </div>
    <div class="col-10">
    <div id="info">
    <h2>${User.getUserLogged().username}</h2>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editUsernameModal" id="editBtn" class="col">
    <img src="../img/edit.png" alt="Edit button">
    </button></div>
    <div id="info">
    <p>email: ${User.getUserLogged().email}</p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editEmailModal" id="editBtn" class="col">
    <img src="../img/edit.png" alt="Edit button">
    </button></div>
    <div id="info">
    <p>change password</p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editPasswordModal" id="editBtn" class="col">
    <img src="../img/edit.png" alt="Edit button">
    </button></div>
    <button id="btnLogout">Logout</button></div></div></div>`

    if (User.getUserLogged().words.length == 0){
        result += `<div class="container"><div class="row" id="moreInfoRow">
        <div id="unlockedWords" class="col-5"><h3>Unlocked words</h3>
        <div class="row">
        <h4>No unlocked words yet!</h4></div></div>`
    }else if(User.getUserLogged().words.length == 1){
        result += `<div class="container"><div class="row" id="moreInfoRow">
        <div id="unlockedWords"  class="col-5"><h3>Unlocked words</h3>
        <div class="row">
        <h2 class="col-6">${User.getUserLogged().words[0]}</h2>
        <h2 class="col-6"></h2></div></div>`
    }else{
        result += `<div class="container"><div class="row" id="moreInfoRow">
        <div id="unlockedWords"  class="col-5"><h3>Unlocked words</h3>
        <div class="row">
        <h2 class="col-6">${User.getUserLogged().words[0]}</h2>
        <h2 class="col-6">${User.getUserLogged().words[1]}</h2></div></div>`
    }

    if (User.getUserLogged().badges.length == 0){
        result += `<div id="unlockedBadges" class="col-5">
        <h3>Badges</h3>
        <h4>You have no badges yet!</h4>
        </div>`
    }

    result += `<div id="mnuseLeague" class="col-2">
    <p>See</p><p>MNUSE</p><p>league</p></div></div></div>`

    document.getElementById("middleWebsite").innerHTML = result
}

accountView()

document.getElementById("btnLogout").addEventListener("click", () => {
    User.logout()
    window.location.href = "../../index.html"
})

document.getElementById("editUsername").addEventListener("submit", function(e){
    e.preventDefault()
    const newUsername = document.getElementById("newUsername").value
    User.editProfile(newUsername, User.getUserLogged().email, User.getUserLogged().password)
})

document.getElementById("editEmail").addEventListener("submit", function(e){
    e.preventDefault()
    const newEmail = document.getElementById("newEmail").value
    User.editProfile(User.getUserLogged().username, newEmail, User.getUserLogged().password)
})

document.getElementById("editPassword").addEventListener("submit", function(e){
    e.preventDefault()
    const newPassword = document.getElementById("newPassword").value
    const oldPassword = document.getElementById("oldPassword").value
    User.editPassword(oldPassword, newPassword)
})

document.getElementById("formAvatar").addEventListener("submit", function(e){
    e.preventDefault()

    const selectedAvatar = document.querySelector(`input[name="avatar"]:checked`).value
    console.log(selectedAvatar)
    User.editAvatar(selectedAvatar)
})