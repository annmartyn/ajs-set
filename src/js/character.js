'use strict';

let types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']

export default class Character {
    constructor(name, type) {
        if (name.length < 2 || name.length > 10) {
            throw new Error('wrong name');
        } else if (!types.includes(type)) {
            throw new Error('wrong type');
        } else {
            this.name = name;
            this.type = type;
        }
        this.health = 100;
        this.level = 1;
    }
}

export class Undead extends Character {
    constructor(name, type = 'Undead') {
        super(name, type);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Swordsman extends Character {
    constructor(name, type = 'Swordsman') {
        super(name, type);
        this.attack = 40;
        this.defence = 10;
    }
}

export class Magician extends Character {
    constructor(name, type = 'Magician') {
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}