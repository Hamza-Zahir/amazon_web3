const Authorized = artifacts.require("Authorized");

module.exports = function (deployer) {
  deployer.deploy(Authorized);
};
