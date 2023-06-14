import * as User from "../models/modelUsers.js"

const tableUsers = document.getElementById("tableUsers")

let users = User.exportUsers() 

function renderTable(users){
    let result = ""
    tableUsers.innerHTML = ""
    result += `<tr><th>Username</th>
        <th>Email</th><th>Current Level</th><th>Role</th>
        <th colspan="3">Actions</th></tr>`

    for (let user of users){

        result += `<tr><td id="addBorder">${user.username}</td>
        <td  id="addBorder">${user.email}</td>
        <td id="addBorder">${user.currentLevel}</td>`

        if (user.code == 1){
            result += `<td id="addBorder">Admin</td>`
        }else{
            result += `<td id="addBorder">Player</td>`
        }

        result += `
        <td><button type="button" class="btn edit" data-bs-toggle="modal" data-bs-target="#editProfileModal"  id="${user.username}">edit</button></td>`
        if(User.isUserBlocked(user.username)){
            result += `<td><button class="btn unblock" id="${user.username}">unblock</button></td>`
        }else{
            result += `<td><button class="btn block" id="${user.username}">block</button></td>`
        }
        
        result += `<td><button class="btn remove" id="${user.username}">remove</button></td></tr>`

    }
    tableUsers.innerHTML += result
}

renderTable(users)

tableUsers.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove")){
            const userID = e.target.id
            if (confirm("Deseja remover o utilizador?")){
                User.removeUser(userID)
                location.reload()
            }
        }
})

let userID

tableUsers.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit")){
        userID = e.target.id
    }
})

tableUsers.addEventListener("click", (e) => {
    if (e.target.classList.contains("block")){
        userID = e.target.id
        User.blockUser(userID)
        renderTable(users)
    }
})

tableUsers.addEventListener("click", (e) => {
    if (e.target.classList.contains("unblock")){
        userID = e.target.id
        User.unblockUser(userID)
        renderTable(users)
    }
})

document.getElementById("editProfile").addEventListener("submit", (e) => {
    e.preventDefault()
    const newCode = document.getElementById("roleUser").value
    if(newCode != ""){
        User.editCode(userID, newCode)
    }
})

document.getElementById("usernameBtn").addEventListener("click", () => {
    const username = document.getElementById("searchBtn").value
    const foundUser = users.filter((user) => user.username == username)
    renderTable(foundUser)
})

document.getElementById("emailBtn").addEventListener("click", () => {
    const email = document.getElementById("searchBtn").value
    const foundUser = users.filter((user) => user.email == email)
    renderTable(foundUser)
})

document.getElementById("levelBtn").addEventListener("click", () => {
    const level = document.getElementById("searchBtn").value
    const foundUser = users.filter((user) => user.currentLevel == level)
    renderTable(foundUser)
})