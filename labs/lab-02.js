function getMean( ...values ) {
  return (
    values.reduce(
      ( accumulatedValue, current ) => accumulatedValue + current,
      0,
    ) / values.length
  );
}

const getMedian = ( ...values ) => {
  return values.sort( ( a, b ) => b - a )[Math.round( values.length / 2 )];
};

const getMode = function( ...values ) {
  const count = {};
  values.forEach( ( v ) => ( count[v] = count[v] ? count[v] + 1 : 1 ) );

  let most = [];

  for ( const entry of Object.entries( count ) ) {
    const arg = entry[0];
    const value = entry[1];

    if ( most.length === 0 || count[most[0]] === value ) {
      most.push( arg );
    } else if ( value > count[most[0]] ) {
      most = [ arg ];
    }
  }

  return most;
};

// getMean(1, 5, 32, 8, 4)
function calculateStats( ...values ) {
  return [ getMean( ...values ), getMedian( ...values ), getMode( ...values ) ];
}

const [ mean, median, mode ] = calculateStats(
  3,
  6,
  2,
  8,
  9,
  10,
  2,
  2,
  6,
  3,
  3,
  7,
  4,
);

console.log( `Mean ${mean} | Median ${median} | Mode: ${mode}` );
