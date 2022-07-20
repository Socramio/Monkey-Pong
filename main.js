var game = function(){
    let time = 30;
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
        ball.style.left = 0;
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
