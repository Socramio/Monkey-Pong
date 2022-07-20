var game = function(){
    let time = 100;
    let movement = 20;
    let movementCh = 20;
    let width = document.documentElement.clientWidth - movement;
    let height = document.documentElement.clientHeight - movement;
    let controlGame;
    let player1;
    let player2;

    function start () {
        init();
        controlGame = setInterval(play, time)
    }
    
    function init () {
        ball.style.left = 500;
        ball.state = 1;
        ball.direction = 1;
        player1 = new Object();
        player2 = new Object();
        player1.keyPress = false;
        player2.keyPress = false;
        player1.keyCode = null;
        player2.keyCode = null;
    }

    function stop () {
        clearInterval(controlGame);

    }

    function play () {
        moveCh();
        moveBall();
        checkIfPoint();
    }

    function checkIfPoint () {
        if(ball.offsetLeft >= width) {
            stop();
            console.log("point to player 1")
        }
        if(ball.offsetLeft <= 0) {
            stop();
            console.log("point to player 2")
        }
    }

    function moveBall () {
        checkStateBall ();
        switch (ball.state) {
            case 1 : 
                ball.style.left = (ball.offsetLeft + movement) + "px";
                ball.style.top = (ball.offsetTop + movement) + "px";
                break;
            case 2:
                ball.style.left = (ball.offsetLeft + movement) + "px";
                ball.style.top = (ball.offsetTop - movement) + "px";
                break;
            case 3:
                ball.style.left = (ball.offsetLeft - movement) + "px";
                ball.style.top = (ball.offsetTop + movement) + "px";
                break;
            case 4:
                ball.style.left = (ball.offsetLeft - movement) + "px";
                ball.style.top = (ball.offsetTop - movement) + "px";
                break;
        }
    }


    function checkStateBall () {

        if (collidePlayer2()){
            ball.direction = 2;
            if(ball.state === 1) ball.state = 3;
            if(ball.state === 2) ball.state = 4;
        } else if (collidePlayer1()) {
            ball.direction = 1;
            if(ball.state === 3) ball.state = 1;
            if(ball.state === 4) ball.state = 2;
        }
        if(ball.direction === 1) {
            if(ball.offsetTop >= height) ball.state = 2;
            else if(ball.offsetTop <= 0) ball.state = 1;
        } else {
            if(ball.offsetTop >= height) ball.state = 4;
            else if(ball.offsetTop <= 0) ball.state = 3;
        }
    }

    function collidePlayer1() {
            if (ball.offsetLeft <= (ch1.clientWidth) &&
                ball.offsetTop >= ch1.offsetTop &&
                ball.offsetTop <= (ch1.offsetTop + ch1.clientHeight)){
                return true;
            }

        return false;
    }

    function collidePlayer2() {
        if (ball.offsetLeft >= (width-ch2.clientWidth) &&
                ball.offsetTop >= ch2.offsetTop &&
                ball.offsetTop <= (ch2.offsetTop + ch2.clientHeight)){
                return true;
                }
        return false;
    }

    function moveCh () {
        if(player1.keyPress){
            if(player1.keyCode == 87 && ch1.offsetTop >= 30)
                ch1.style.top = (ch1.offsetTop - movementCh) + "px";
            if(player1.keyCode == 83 && (ch1.offsetTop <= 575))
                ch1.style.top = (ch1.offsetTop + movementCh) + "px";
        }
        if(player2.keyPress){
        if(player2.keyCode == 38 && ch2.offsetTop >= 30)
            ch2.style.top = (ch2.offsetTop - movementCh) + "px";
        if(player2.keyCode == 40 && (ch2.offsetTop <= 575))
            ch2.style.top = (ch2.offsetTop + movementCh) + "px";
        }
    }

    document.onkeydown = function (e) {
        e = e || window.event;
        switch(e.keyCode){
            case 87: // W
            case 65: // A
            case 83: // S
            case 68: // D
            player1.keyCode = e.keyCode;
            player1.keyPress = true;
            break;
            case 38: // UP
            case 40: // DOWN
            case 37: // LEFT
            case 39: // RIGHT
            player2.keyCode = e.keyCode;
            player2.keyPress = true;
            break;
        }
    }

    document.onkeyup = function (e) {
        if(e.keyCode == 87 || e.keyCode == 65 || e.keyCode == 83 || e.keyCode == 68) 
            player1.keyPress = false;
        if(e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 39)
            player2.keyPress = false
    }


    start();
}();
