const packageGenerator = require("./package");
const reactSpaGenerator = require('./react-spa');
const reactComponentGenerator = require('./react-component');
const reactContainerGenerator = require('./react-container');

module.exports = (plop) => {
  plop.setGenerator("package", packageGenerator);
  plop.setGenerator('react-spa', reactSpaGenerator);
  plop.setGenerator('react-component', reactComponentGenerator);
  plop.setGenerator('react-container', reactContainerGenerator);
};
