import * as User from "../models/modelUsers.js";
import * as Rebus from "../models/modelChallengeRebus.js"

function indexView(){

    User.initUsers()
    Rebus.initRebus()

    let result = `<div class="row justify-content-center align-items-center">
    <div class="col-md-12"><h1 id="title">ESCAPE THE MIND</h1>
    <div id="bodyText">
    <p>Lily lost her parents and suffers from amnesia.</p>
    <p>Help her unlock the memories!</p></div>`

    if (User.isLogged()){
        result += `<input type="button" class="btn btn-primary btn-lg btn-block" value="Play" data-bs-toggle="modal" data-bs-target="#disclaimerModal" >
        </div>
      </div>
      </div>`
    }else{
        result += `<input type="button" class="btn btn-primary btn-lg btn-block" value="Log in to play" onclick="window.location.href = '../../html/loginSignup.html'">
        </div>
      </div>
      </div>`
    }
    
    document.getElementById("middleWebsite").innerHTML = result
    document.getElementById("disclaimerModal").addEventListener("click", () => {
      const loggedUser = User.getUserLogged()
      if(loggedUser.currentLevel == 0){
        window.location.href = "../../html/terapeuta.html"
      }else{
        window.location.href = "../../html/mapa.html"
      }
    })

}

indexView()