import Character from '../character.js';

test('checking error - wrong type', () => {
    const char = () => new Character('Harry', 'Knight');
    expect(char).toThrow(new Error('wrong type'));
});

test('checking error - wrong name', () => {
    const char = () => new Character('HarryCoolestZombie', 'Daemon');
    expect(char).toThrow(new Error('wrong name'));
})