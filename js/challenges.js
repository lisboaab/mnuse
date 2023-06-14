import * as User from "./models/modelUsers.js";
import * as Level from "./models/modelLevels.js";


var minutes = Level.limitTime;
    // Calcula o tempo final em milissegundos
    var endTime = new Date().getTime() + minutes * 60 * 1000;
    // Atualiza o countdown a cada segundo
    var countdown = setInterval(function() {
      // Calcula a diferença entre o tempo final e o tempo atual
      var now = new Date().getTime();
      var timeLeft = endTime - now;
      // Calcula os minutos e segundos restantes
      var minutesLeft = Math.floor((timeLeft / 1000 / 60) % 60);
      var secondsLeft = Math.floor((timeLeft / 1000) % 60);
      // Exibe o countdown na página
      if (secondsLeft >=10) {
        document.getElementById("countdown").innerHTML = "0" + minutesLeft + ":" + secondsLeft;
      } else if (secondsLeft < 10) {document.getElementById("countdown").innerHTML = "0" + minutesLeft + ":0" + secondsLeft;}
      // Verifica se o tempo expirou
      if (timeLeft < 0) {
        clearInterval(countdown);
        var modal = document.getElementById("modal");
        modal.style.display = "block";
        setTimeout(function() {
          modal.querySelector(".modal-content").style.opacity = "1";
        }, 100);
        document.getElementById("countdown").innerHTML ="00:00";
      }
    }, 1000)
;

document.getElementById('word1').innerHTML = User.words[1];
document.getElementById('word2').innerHTML = User.words[2];

document.getElementById('restart').addEventListener('click', function() {
  window.location.href = "challenges.html";
})

document.getElementById('challenge').innerHTML = Level.imagePath
document.getElementById('challengesCompleted').innerHTML = User.finishedChallenges;
document.getElementById('challengesTotal').innerHTML = Level.numberOfChallenges;

document.getElementById('back').addEventListener('click', function() {
});

document.getElementById('continue').addEventListener('click', function() {
});