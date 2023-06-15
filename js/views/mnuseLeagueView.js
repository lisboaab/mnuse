import * as User from "../models/modelUsers.js";

const users = User.exportUsers()
let timesUsers = users.filter((user) => user.isFinished).map((user) => user.timeChallenges).sort((a, b) => b - a)

const topThreeUsers =  timesUsers.slice(0, 3).map((time) => users.find(user => user.timeChallenges === time))
let timeLoggedUser = User.getUserLogged().timeChallenges
let timeLoggedUserFound = timesUsers.findIndex((timeUser) => timeUser == timeLoggedUser) +1

const span = document.querySelector("span")

if(timeLoggedUserFound == 1){
  span.innerHTML = `#${timeLoggedUserFound}st`
}else if(timeLoggedUserFound == 2){
  span.innerHTML = `#${timeLoggedUserFound}nd`
}else if(timeLoggedUserFound == 3){
  span.innerHTML = `#${timeLoggedUserFound}rd`
}else{
  span.innerHTML = `#${timeLoggedUserFound}th`
}

topThreeUsers.forEach((user, index) => {
  const position = document.getElementById(`position${index + 1}`)
  const info = document.getElementById(`info${index + 1}`)
  
  const minutes = Math.floor(user.timeChallenges / 60)
  const seconds = user.timeChallenges % 60
  const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds

  position.innerHTML  += `<img class="avatars" src="${user.avatar}">`
  info.innerHTML = `<p>${user.username}</p><p>${minutes}m${secondsDisplay}s</p>`
})
