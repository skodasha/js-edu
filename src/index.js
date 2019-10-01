/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    conf = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      var weeks = 1300;
      if(knowsProgramming){
         weeks = 800;
      }
      return Math.ceil(weeks/config[conf]);
  };
  