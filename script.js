'use strict';

const p = document.querySelector('p');

const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

const makeGreen = function () {
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
};

p.addEventListener('click', makeGreen);

// Regular
console.log('Hello');

// Interpolated
console.log('Hello I am a %s string', '🥁');

// Styled
console.log(
  '%c I am some great text',
  'font-size:25px; background: red; text-shadow: 10px 10px 0 blue'
);

// warning!
console.warn('Oh NOOO!');

// Error :|
console.error('Holy Shit!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
console.assert(p.classList.contains('laflame'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 8} dog years old`);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count('UTOPIA');
console.count('ASTROWORLD');
console.count('ASTROWORLD');
console.count('ASTROWORLD');
console.count('UTOPIA');
console.count('UTOPIA');
console.count('UTOPIA');
console.count('ASTROWORLD');
console.count('UTOPIA');
console.count('UTOPIA');
console.count('ASTROWORLD');
console.count('ASTROWORLD');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

// tabling
console.table(dogs);
