class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.midl = 0;
    }
    setRange(min = 0, max = 0) {
        this.min = min;
        this.max = max;
        //this.log('setRange');
    }
    
    guess() {
        this.midl = Math.round((this.max - this.min) / 2) + this.min;
        this.log('guess');
        return Math.round(this.midl);
    }
    
    lower() {
        this.max = this.midl;
        //this.log('lower');
    }
    
    greater() {
        this.min = this.midl;
        //this.log('greater');
    }
    log(fun = ''){
        console.log(fun.toUpperCase() + ":", "min:", this.min, "max:", this.max, "midl:", Math.round(this.midl));
    }
}

module.exports = GuessingGame;

const game = new GuessingGame();
game.setRange(0, 4048)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
