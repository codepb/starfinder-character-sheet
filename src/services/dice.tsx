const rollDiceWithSides = (sides: number) => () =>
  Math.floor(Math.random() * sides) + 1;

const rollD20 = rollDiceWithSides(20);

export { rollDiceWithSides, rollD20 };
