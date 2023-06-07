import * as User from "../models/modelUsers.js"

const tableUsers = document.getElementById("tableUsers")

let users = User.exportUsers() 

function renderTable(){
    let result = ""
    tableUsers.innerHTML = ""
    result += `<tr><th>Name</th>
        <th>Role</th><th>Email</th><th>Current Level</th>
        <th>Options</th></tr>`
    for (let user of users){
        if (user.code == 1){
            result += `<tr><td>${user.username}</td><td>Admin</td>`
        }else{
            result += `<tr><td>${user.username}</td><td>Player</td>`
        }

        result += `<td>${user.email}</td>
        <td>${user.currentLevel}</td>
        <td><button class="btn btn-primary remove" id="${user.username}">REMOVE</button></td>
        <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editProfileModal"  id="${user.username}">EDIT</button></td></tr>`

    }
    tableUsers.innerHTML += result
}

renderTable()

tableUsers.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove")){
            const userID = e.target.id
            if (confirm("Deseja remover o utilizador?")){
                users = users.filter((user) => user.username !== userID)
                localStorage.removeItem(userID)
                console.log(users)

                renderTable()
            }
        }
})

document.getElementById("editProfile").addEventListener("submit", function(e){
    const manageNewEmail = document.getElementById("manageNewEmail")
    const manageNewUsername = document.getElementById("manageNewUsername")
    const manageNewPassword = document.getElementById("manageNewPassword").value
    const manageNewCode = document.getElementById("manageNewCode").value
    e.preventDefault()
    if (manageNewEmail != null){
        User.editEmail(manageNewEmail.value)
    }else if(manageNewUsername != null){
        User.editUser(manageNewUsername.value)
    }else if(manageNewPassword != null){
        User.editPassword(manageNewPassword)
    }else if(manageNewCode != null){
        User.editCode(manageNewCode)
    }
    const newUsername = document.getElementById("newUsername").value
    User.editUser(newUsername)
})
