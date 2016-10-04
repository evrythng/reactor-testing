
var EVT = require('evrythng-extended');

// -------------------------- MODIFY YOUR SETUP HERE --------------------------
var OPERATOR_API_KEY = '';

/* Uncomment one of the following to choose the example event
 * that will be received by main.js when the test is run.
 * You can also choose a path to any other example events you have created.
 */
// var event = require('./example-events/onActionCreated.json');
// var event = require('./example-events/onThngPropertiesChanged.json');
// var event = require('./example-events/onProductPropertiesChanged.json');
// ----------------------- DO NOT MODIFY BELOW THIS LINE ----------------------

function getLogger(level) {
  return function(msg) {
    var datetime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    console.log(datetime + ' [' + level + '\t]: ' + msg);
  }
}

var logger = {
  debug: getLogger('debug'),
  info: getLogger('info'),
  warn: getLogger('warn'),
  error: getLogger('error')
};

function done() {
  logger.debug('Reporting logs to EVRYTHNG...');
  logger.debug('Script finished!');
}

global.EVT = EVT;
global.app = new EVT.Operator(OPERATOR_API_KEY);
global.done = done;
global.logger = logger;

try {
  var reactor = require('./main.js');
  if (reactor[event.function]) {
    reactor[event.function](event.event);
  } else {
    console.log('There are no event functions in the reactor script to execute.');
  }
} catch (e) {
  logger.error('Could not execute reactor script: ' + e.message);
}
