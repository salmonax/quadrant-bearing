# quadrant-bearing
A simple azimuth to quadrant-bearing converter.

## Installation
  `npm install quadrant-bearing`

## Usage
  ```
  var quadrantBearing = require('quadrant-bearing');
  quadrantBearing(300); //=> 'N60°W'
  ```

## Tests
  `npm test`

## Contributing

I've eschewed ES2015 syntax in case somebody wants to use it with an older browser or an older version of node without transpilation. Other than that, do whatever you want.
