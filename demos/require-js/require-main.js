// This file uses require.js
require( [ './require-dependency' ], function( dep1 ) {
  console.log( 'Dependency 1 is ', dep1 );
} );

// require([file locations], function(dep1, dep2, ...) {})
