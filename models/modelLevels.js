class Levels {
    levelName = "";
    imagePath = "";
    numberOfChallenges= 0;
    limitTime = 0;

    constructor(levelName, imagePath, numberOfChallenges,limitTime){
        this.levelName = levelName;
        this.imagePath = imagePath;
        this.numberOfChallenges = numberOfChallenges;
        this.limitTime = limitTime;
    }
}

const level1 = new Levels("1",`
        <img id="img" src="../assets/imgs/sala_aula.png" usemap="#image_map">
        <map name="image_map">
            <area alt="Board" title="Board" href="dragndrop.html" coords="689,163,1189,387" shape="rect">
            <area alt="Table" title="Table" href="challenges.html" coords="438,487 434,518 492,524 561,518 563,489 512,483 " shape="polygon">
            <area alt="door" title="door" href="challenges.html" coords="1417,237 1424,228 1548,177 1560,182 1562,198 1562,284 1558,659 1558,673 1550,683 1540,685 1440,638 1432,626 1432,604 1424,381 1418,247 " shape="polygon">
        </map>`
        , 3, 5);

const level2 = new Levels("2", `
        <img class="img" src="img/carro.jpeg" usemap="#image_map">
        <map name="image_map">
            <area alt="Car" title="Car" href="#" coords="669,379 671,363 683,347 704,339 738,339 759,341 777,357 781,381 785,379 793,381 791,388 785,392 795,402 797,430 800,436 800,441 797,445 791,447 791,459 787,467 775,467 767,461 767,449 681,449 681,461 675,467 667,467 659,455 659,447 651,445 649,436 651,430 655,404 665,390 655,385 661,377 " shape="polygon">
            <area alt="Outdoor" title="Outdoor" href="#" coords="1419,283 1424,281 1542,281 1550,283 1550,443 1550,451 1546,455 1334,455 1375,355 " shape="polygon">
            <area alt="Radio" title="Radio" href="#" coords="789,683 789,691 789,769 791,777 875,779 883,777 887,769 887,689 881,681 795,681 " shape="polygon">
            <area alt="Diary" title="Diary" href="#" coords="1101,818 1220,791 1232,800 1260,899 1203,903 1130,899 1095,897 1093,822 " shape="polygon">
            <area alt="Radio Buttons" title="Radio Buttons" href="#" onclick="playSound()" coords="787,799 789,822 795,824 887,824 887,800 885,797 793,797 " shape="polygon">
            <audio id="explosionSound"> <source src="img/Explosion.mp3"></audio>
        </map> 
        <script>
        function playSound(){
            let sound = document.getElementById("explosionSound")
            sound.play()
        }
        </script>`
        , 4, 6);