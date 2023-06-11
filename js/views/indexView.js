import * as User from "../models/modelUsers.js";

function indexView(){

    User.initUsers()

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

}

indexView()