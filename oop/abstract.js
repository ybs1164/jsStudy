// game : chrome T-rex game 
// https://www.trex-game.skipser.com/

// define empty object
var ex_object = {};

var highScore = 0;
var score = 0;
var darkmode = false;


// 객체가 어떤 것을 하는지를 중심으로 개발하라

class Object {
    constructor() {
        this.position = [0, 0];
        this.isEnable = true;
    }

    move(dx, dy) {
        this.position.x += dx;
        this.position.y += dy;
    }

    enable() {

    }

    disable() {

    }
}

class Player extends Object {
    constructor() {
        super();
        this.speed = 1;
        this.isJump = false;
    }

    run() {

    }
}

var obj = new Player();
obj.move(1, 1); //  

var player = {
    position: [0, 0], // 위치
    speed: 1, // 속도 
    isJump: false, // 점프를 하고 있는가?
    isEnable: true // 활성화 되었는가?
};

var bird = {
    position: [0, 0],
    isEnable: true
};

var highCactus = {
    position: [0, 0],
    isEnable: true,
    count: 1
};

var lowCactus = {
    position: [0, 0],
    isEnable: true,
    count: 1
};
