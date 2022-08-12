class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
        let mid;
        mid = Math.round((this.right - this.left) / 2) + this.left;
        return mid;
    }

    lower() {
        this.right = this.guess();
        return this.right;
    }

    greater() {
        this.left = this.guess();
        return this.left;
    }
}

module.exports = GuessingGame;