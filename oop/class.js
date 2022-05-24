class Rectangle {
    // 객체 생성 시 실행되는 함수
    constructor(x=0, y=0, width=100, height=30) {
        // 'this' means own object
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    // 객체가 가지는 함수 : 메서드 (method)
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    getArea() {
        return this.width * this.height;
    }
}

// 객체
let rect = new Rectangle();
let rect2 = new Rectangle();

// console.log(rect);

rect.move(1, 1);

// console.log(rect);

export default Rectangle;