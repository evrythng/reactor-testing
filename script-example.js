/**
 * Your Reactor script must export the callback functions it uses,
 * in the same manner as the example below.
 */

function onActionCreated(event) {
  logger.info(`onActionCreated\n${JSON.stringify(event)}`);
  done();
}

function onThngPropertiesChanged(event) {
  logger.info(`onThngPropertiesChanged\n${JSON.stringify(event)}`);
  done();
}

function onProductPropertiesChanged(event) {
  logger.info(`onProductPropertiesChanged\n${JSON.stringify(event)}`);
  done();
}

function onScheduledEvent(event) {
  logger.info(`onScheduledEvent\n${JSON.stringify(event)}`);
  done();
}

module.exports = {
  onActionCreated,
  onThngPropertiesChanged,
  onProductPropertiesChanged,
  onScheduledEvent
};