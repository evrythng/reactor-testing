/**
 * Your Reactor script must export the callback functions it uses,
 * in the same manner as the example below.
 */

function onActionCreated(event) {
  logger.info('onActionCreated() in the example testing script!');
  done();
}

function onThngPropertiesChanged(event) {
  logger.info('onThngPropertiesChanged() in the example testing script!');
  done();
}

function onProductPropertiesChanged(event) {
  logger.info('onProductPropertiesChanged() in the example testing script!');
  done();
}


exports.onActionCreated = onActionCreated;
exports.onThngPropertiesChanged = onThngPropertiesChanged;
exports.onProductPropertiesChanged = onProductPropertiesChanged;