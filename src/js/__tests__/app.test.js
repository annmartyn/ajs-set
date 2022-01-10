import Team from '../app.js';
import * as ch from '../character.js';

const swordsman = new ch.Swordsman('Swordsman');
const magician = new ch.Magician('Magician');
const undead = new ch.Undead('Undead');

const team = new Team();
const set = new Set();

test('add one character', () => {
    team.add(magician);
    set.add(magician);
    expect(team.members).toEqual(set);
});

test('add one character (dupl)', () => {
    const t = () => team.add(magician);
    expect(t).toThrow(new Error('Такой персонаж уже есть!'));
});

test('add few characters', () => {
    team.addAll(swordsman, magician, undead, magician);
    set.add(swordsman);
    set.add(magician);
    set.add(undead);
    set.add(magician);
    expect(team.members).toEqual(set);
});

test('check array ', () => {
    expect(team.toArray()).toEqual([...team.members]);
});