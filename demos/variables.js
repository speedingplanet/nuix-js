/* eslint-disable no-unused-vars */

// let|const variableName = someValue;
// let x;
// ...later
// x = 10;

const aString = 'string';
const templateString = `Value of aString: ${aString}`;
const todayTemplate = `Today is ${Date.now()}`;
const todayTemplateAsFunction = function() {
  return 'Today is ' + Date.now();
};
const multiLineTemplate = `
hello.
how are you?
`;
console.log( todayTemplate );

const aNumber = 10;
const aBoolean = true;
const anArray = [ 1, 2, 3, 4 ];
anArray.push( 5, 6, 7 );

const multiDimensionalArray = [
  [ 1, 2 ],
  [ 3, 4 ],
  [ 5, 6 ],
];
multiDimensionalArray.push( [ 7, 8 ] );

console.log( multiDimensionalArray[0][1] );

const anObject = {
  firstName: 'John',
  lastName: 'Paxton',
  'zip code': '07110',
  state: 'NJ',
};

console.log( anObject.firstName );
console.log( anObject['zip code'] );

const data = {
  firstNames: [],
};

data.firstNames.push( 'Arpan', 'John', 'Anita' );

const PI = 3.14;

const myConstants = {
  pi: 3.14,
  gravity: 9.8,
};

Object.freeze( myConstants );
console.log( Math.PI );

const aFunction = function( x, y ) {
  return x + y;
};

aFunction( 1, 2 );

const aRegularExpression = /[0-9]+/;

// eslint-disable-next-line prefer-regex-literals
const anotherRegExp = new RegExp( '[0-9]+' );

const today = new Date();

const exampleMap = new Map();
const exampleSet = new Set();
