// ----------------------- YOUR REACTOR SCRIPT GOES HERE -----------------------

function onActionCreated(event) {
  logger.info('onActionCreated() in the example testing script!');
}

function onThngPropertiesChanged(event) {
  logger.info('onThngPropertiesChanged() in the example testing script!');
}

function onProductPropertiesChanged(event) {
  logger.info('onProductPropertiesChanged() in the example testing script!');
}

// ----------------------- DO NOT MODIFY BELOW THIS LINE -----------------------
exports.onActionCreated = onActionCreated;
exports.onThngPropertiesChanged = onThngPropertiesChanged;
exports.onProductPropertiesChanged = onProductPropertiesChanged;