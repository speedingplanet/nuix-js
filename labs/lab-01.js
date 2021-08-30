/*
function getMean(a, b, c, d, e) {
  return (a + b + c + d + e) / 5;
}
*/

function getMean(...values) {
  return (
    values.reduce(
      (accumulatedValue, current) => accumulatedValue + current,
      0
    ) / values.length
  );
}

console.log('The average of 1, 2, 3, 4, 5 is ', getMean(1, 2, 3, 4, 5));

const getMedian = (a, b, c, d, e) => {
  let values = [a, b, c, d, e];
  return values.sort((a, b) => b - a)[2];
};

console.log('The median of 1, 2, 3, 4, 5 is ', getMedian(1, 2, 3, 4, 5));
console.log('The median of 1, 2, 3, 4, 15 is ', getMedian(1, 2, 3, 4, 15));

const getMode = function (a, b, c, d, e) {
  let vals = {};
  vals[a] = vals[a] ? vals[a] + 1 : 1;
  vals[b] = vals[b] ? vals[b] + 1 : 1;
  vals[c] = vals[c] ? vals[c] + 1 : 1;
  vals[d] = vals[d] ? vals[d] + 1 : 1;
  vals[e] = vals[e] ? vals[e] + 1 : 1;

  let most = [];

  for (let entry of Object.entries(vals)) {
    let arg = entry[0];
    let value = entry[1];

    if (most.length === 0 || vals[most[0]] === value) {
      most.push(arg);
    } else if (value > vals[most[0]]) {
      most = [arg];
    }
  }

  return most;
};

console.log('Mode of 1, 2, 3, 4, 5: ', getMode(1, 2, 3, 4, 5));
console.log('Mode of 1, 2, 2, 4, 5: ', getMode(1, 2, 2, 4, 5));
console.log('Mode of 1, 2, 2, 4, 4: ', getMode(1, 2, 2, 4, 4));
