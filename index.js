'use strict';

/**
 * Converts azimuth bearing to quadrant bearing
 * @param (number) number
 */
module.exports = function quadrantBearing(heading) {
  const degreeChar = String.fromCharCode(176);
  const primaryCardinality = (heading >= 270 || heading <= 90) ? 'N' : 'S';
  const secondaryCardinality = (heading <= 180) ? 'E' : 'W';
  const angle = (heading <= 90) ? heading :
                   (heading <= 180) ? 180 - heading :
                     (heading <= 270) ? heading - 180 : 360 - heading;
  return primaryCardinality + angle + degreeChar + secondaryCardinality;
};
