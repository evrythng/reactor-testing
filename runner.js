const EVT = require('evrythng-extended');
const config = require('./config.json');

const logs = [];

global.EVT = EVT;
global.logger = {
  debug: log,
  info: log,
  warn: log,
  error: log
};
global.done = () => {
  if(!config.realistic) return;
  logs.forEach((item) => console.log(item));
};

function log(msg) {
  var datetime = new Date().toString();
  datetime = datetime.substring(datetime.indexOf(':') - 2, datetime.indexOf('GMT') - 1);
  msg = `${datetime}: ${msg}`;

  if(config.realistic) logs.push(msg);
  else console.log(msg);
}

function stringifyErr(err) {
  return `Error: ${(err.message ? err.message : JSON.stringify(err))} ${err.stack}`;
}

(() => {
  EVT.setup({
    apiUrl: config.apiUrl
  });

  global.app = new EVT.TrustedApp(config.trustedAppApiKey);
  try {
    const script = require(config.script);
    if(script[config.function]) script[config.function](config.event);
    else console.log(`The event function '${config.function}' was not found in script '${config.script}'. ` + 
                     `Has it been exported to module.exports?`);
  } catch(err) {
    if(!config.realistic) console.log(`Could not execute reactor script: ${stringifyErr(err)}`);
  }

  if(!config.realistic) {
    process.on('unhandledRejection', (err) => console.log(`Unhandled rejection: ${stringifyErr(err)}`));
    process.on('uncaughtException',  (err) => console.log(`Uncaught exception: ${stringifyErr(err)}`));
  }
})();
