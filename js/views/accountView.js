import * as User from "../models/modelUsers.js";

function accountView(){

    User.initUsers()

    let result = `<div class="container">
    <div id="userInfo" class="row">
    <div class="col-2">
    <img id="profilePicture" src="${User.getUserLogged().avatar}">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editAvatarModal" id="editBtn" class="col">
    <img src="../assets/imgs/edit.png" alt="Edit button">
    </button>
    </div>
    <div class="col-10">
    <div id="info1">
    <h2>${User.getUserLogged().username}</h2>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editUsernameModal" id="editBtn" class="col">
    <img src="../assets/imgs/edit.png" alt="Edit button">
    </button></div>
    <div id="info2">
    <p>email:</p>
    <p id="emailInfo">${User.getUserLogged().email}</p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editEmailModal" id="editBtn" class="col">
    <img src="../assets/imgs/edit.png" alt="Edit button">
    </button></div>
    <div id="info">
    <p>change password</p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editPasswordModal" id="editBtn" class="col">
    <img src="../assets/imgs/edit.png" alt="Edit button">
    </button></div>
    <button id="btnLogout">Logout</button></div></div></div>`

    if (User.getUserLogged().code == 0){
        if (User.getUserLogged().words.length == 0){
            result += `<div class="container"><div class="row" id="moreInfoRow">
            <div class="col-lg-5"><div id="unlockedWords"><button><h3>Unlocked words</h3>
            <div class="row">
            <h4>No unlocked words yet!</h4></div></button></div></div>`
            
        }else if(User.getUserLogged().words.length == 1){
            result += `<div class="container"><div class="row" id="moreInfoRow">
            <div class="col-lg-5"><div id="unlockedWords"><button><h3>Unlocked words</h3>
            <div class="row">
            <h2 class="col-6">${User.getUserLogged().words[0]}</h2>
            <h2 class="col-6"></h2></div></div></div></button>`
        }else{
            result += `<div class="container"><div class="row" id="moreInfoRow">
            <div class="col-lg-5"><div id="unlockedWords"><button>
            <h3>Unlocked words</h3>
            <div class="row">
            <h2 class="col-6">${User.getUserLogged().words[0]}</h2>
            <h2 class="col-6">${User.getUserLogged().words[1]}</h2></div></button></div></div>`
        }

        if (User.getUserLogged().badges.length == 0){
            result += `<div class="col-lg-5"><div id="unlockedBadges" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#unlockedBadgesModal"><button>
            <h3>Badges</h3>
            <h4>You have no badges yet!</h4>
            </div></div></button>`

            let unlockedBadges = `<h4>You have no badges yet!</h4>`
            document.getElementById("modalBodyBadges").innerHTML = unlockedBadges
        }

        result += `<div class="col-lg-2"><div id="mnuseLeague"><button>
        <h4>MNUSE</h4><h4>league</h4></div></div></button></div></div>`
    }else{
        result += `<div class="container"><div class="row" id="moreInfoRow">
        <div class="col-lg-3">
        <div id="manageUsers" type="button"><h3>Manage users</h3></div></div>
        <div class="col-lg-6">
        <div id="manageChallenges"><button><h3>Manage challenges</h3></button></div></div>
        <div class="col-lg-3">
        <div id="manageLevels"><button><h3>Statistics</h3></button></div></div>`
    }

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
    User.editUser(newUsername)
})

document.getElementById("editEmail").addEventListener("submit", function(e){
    e.preventDefault()
    const newEmail = document.getElementById("newEmail").value
    User.editEmail(newEmail)
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

document.getElementById("manageUsers").addEventListener("click", function(){
    window.location.href = "../../html/manageUsers.html"
})