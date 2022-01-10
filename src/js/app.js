'use strict';

export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('Такой персонаж уже есть!');
        }
        this.members.add(character);
    }

    addAll(...chars) {
        chars.forEach((character) => this.members.add(character));
    }

    toArray() {
        return [...this.members];
    }
}