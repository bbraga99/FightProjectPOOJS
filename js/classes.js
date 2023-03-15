class Character {
    //atributos iniciais, cada subclasse terá caracteristicas diferentes
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife; // if ternario se a nova vida for menor que zero ele vai deixar em 0
    }
}

class Knight extends Character {
    constructor(name) {
        super(name);   // super acessa o construtor da classe mae
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this._life;
    }
}

class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this._life;
    }
}

class LittleMonster extends Character {
    constructor() {
        super('Little Monster');
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character {
    constructor() {
        super('Big Monster');
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    }

    Start() {
        this.update();
        //TODO evento do botao de atacar
    } 

    update() {
        //Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = this.fighter1.name;

        //Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = this.fighter2.name;
    }
}