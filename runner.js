const EVT = require('evrythng-extended');
const config = require('./config.json');
const script = require(config.script);
const event = require(config.event);

function getLogger(level) {
  return function(msg) {
    const datetime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    console.log(`${datetime} [${level}\t]: ${((typeof msg === 'object') ? JSON.stringify(msg) : msg)}`);
  }
}

const logger = {
  debug: getLogger('debug'),
  info: getLogger('info'),
  warn: getLogger('warn'),
  error: getLogger('error')
};

function done() {
  logger.debug('Script finished!');
}

function stringifyErr(err) {
  return `${(err.message ? err.message : JSON.stringify(err))} ${err.stack}`;
}

global.EVT = EVT;
global.logger = logger;
global.done = done;

const app = new EVT.App(config.trustedAppApiKey).$init.then(authApplication => {
  global.app = authApplication;
  try {
    if (script[event.function]) {
      script[event.function](event.event);
    } else {
      console.log('There are no event functions in the reactor script to execute. Have they been exported to module.exports?');
    }
  } catch(err) {
    logger.error('Could not execute reactor script: ' + stringifyErr(err));
  }
}).catch(console.error);

process.on('unhandledRejection', function(err) {
  console.log(`! unhandled rejection: ${stringifyErr(err)}`);
});
