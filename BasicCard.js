class BasicCard {
    constructor (front, back) { 
        this.front = front;
        this.back = back;
        this.type = 'basic';
    }

    readFront() {
        console.log("Front: " + this.front);
    }

    readBack() {
        console.log("Back: " + this.back);
    }
}

module.exports = BasicCard;