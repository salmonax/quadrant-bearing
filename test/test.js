'user strict';

var expect = require('chai').expect;
var quadrantBearing = require('../index');


describe('#quadrantBearing', function () {
  it('converts azimuth to quadrant with a numeric heading', function() {
    var result = quadrantBearing(200);
    expect(result).to.equal('S20°W');
  });
  it('wraps values above 360');
  it('correctly handle negative values');
  it('correctly handles empty input');
});
