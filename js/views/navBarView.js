function navbarView() {

    let result = `<div class="container"><div class="row"><div class="col-lg-10 col-8"><nav class="navbar navbar-expand-lg navbar-light h-100"><div class="navbar-brand"><figure>
                  <img id="logo" src="../../img/mnuse_logo.png" alt="logo"></figure></div>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation" id="burguerMenu">
                  <img src="../../img/burguer.png" alt="icon" id="burguer"></button><div class="collapse navbar-collapse justify-content-end" id="navbarNav1"><ul class="navbar-nav">
                  <li class="nav-item"><input type="button" value="Rules" class="nav-link" id="rulesBtn"></li><li class="nav-item">
                  <input type="button" value="About us" class="nav-link" id="abtUsBtn"></li></ul></div></nav></div>            
    `;
    result += `<div class="col-lg-2 col-4"><nav class="navbar navbar-expand-lg navbar-light h-100 d-flex justify-content-center" id="col3">
                  <button class="navbar-toggler" id = "logBtn" type="button" onclick="window.location.href = 'html/loginSignup.html'">
                  <img src="../../img/account.png" alt="icon"></button><div class="collapse navbar-collapse" id="navbarNav2">
                  <ul class="navbar-nav"><li class="nav-item"><input type="button" value="Log in" id="loginBtn" onclick="window.location.href = 'html/loginSignup.html'"></li>
                  </ul></div></nav></div></div></div>                      
                  `;
  
    document.getElementById("header").innerHTML = result; 
  }
  
  navbarView();