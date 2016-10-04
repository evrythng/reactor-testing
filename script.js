// ----------------------- YOUR REACTOR SCRIPT GOES HERE -----------------------

function onActionCreated(event) {
  console.log('onActionCreated() in the example testing script!');
}

function onThngPropertiesChanged(event) {
  console.log('onThngPropertiesChanged() in the example testing script!');
}

function onProductPropertiesChanged(event) {
  console.log('onProductPropertiesChanged() in the example testing script!');
}

// ----------------------- DO NOT MODIFY BELOW THIS LINE -----------------------
exports.onActionCreated = onActionCreated;
exports.onThngPropertiesChanged = onThngPropertiesChanged;
exports.onProductPropertiesChanged = onProductPropertiesChanged;