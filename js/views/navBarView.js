import * as User from "../models/modelUsers.js";

function navbarView() {

  User.initUsers()

    let result = `<div class="container"><div class="row"><div class="col-lg-10 col-8 "><nav class="navbar navbar-expand-lg navbar-light"><div class="navbar-brand"><figure>
                  <img id="logo" src="../../assets/imgs/mnuse_logo.png" onclick="window.location.href = '../../index.html'" alt="logo"></figure></div>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation" id="burguerMenu">
                  <img src="../../assets/imgs/burguer.png" alt="icon" id="burguer"></button><div class="collapse navbar-collapse justify-content-end" id="navbarNav1"><ul class="navbar-nav">
                  <li class="nav-item"><input type="button" value="Rules" class="nav-link" id="rulesBtn" onclick="window.location.href = '../../html/rules.html'"></li><li class="nav-item">
                  <input type="button" value="About us" class="nav-link" id="abtUsBtn" onclick="window.location.href = '../../html/aboutUs.html'"></li></ul></div></nav></div>            
    `;

    if (User.isLogged()) {
      result += `<div class="col-lg-2 col-4">
                  <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-center" id="col3">
                    <button class="navbar-toggler" id="logBtn" type="button" onclick="window.location.href = '../../html/account.html'">
                      <img src="../../assets/imgs/accountIcon.png" alt="icon" id="accountIcon">
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav2">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <input type="button" value="${User.getUserLogged().username}" id="loginBtn" onclick="window.location.href = '../../html/account.html'">
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div></div></div>`;
    } else {
      result += `<div class="col-lg-2 col-4">
                  <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-center" id="col3">
                    <button class="navbar-toggler" id="logBtn" type="button" onclick="window.location.href = '../../html/loginSignup.html'">
                      <img src="../../img/account.png" alt="icon">
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav2">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <input type="button" value="Log in" id="loginBtn" onclick="window.location.href = '../../html/loginSignup.html'">
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div></div></div>`;
    }
    

  document.getElementById("header").innerHTML = result; 
}
  
navbarView();