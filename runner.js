var EVT = require('evrythng-extended');
var config = require('./config.json');
var script = require(config.script);
var event = require(config.event);

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
  logger.debug('Script finished!');
}

global.EVT = EVT;
global.logger = logger;

var app = new EVT.App(config.apiKey);
app.$init.then(app => {
  global.app = app;
  try {
    if (script[event.function]) {
      script[event.function](event.event);
    } else {
      console.log('There are no event functions in the reactor script to execute. Have they been exported to module.exports?');
    }
  } catch(err) {
    logger.error('Could not execute reactor script');
  }
}).catch(e => console.error(e));
