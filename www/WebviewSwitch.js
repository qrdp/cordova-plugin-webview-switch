/* global cordova */

function WebviewSwitch() {
}

WebviewSwitch.prototype.setHostname = function (name, successCallback, errorCallback) {
  cordova.exec(
    successCallback,
    errorCallback,
    "WebviewSwitch",
    "setHostname",
    [name]
  );
};

module.exports = new WebviewSwitch();
