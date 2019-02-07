const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Mountains = function () {
  this.data = null;
}

Mountains.prototype.getData = function() {
  const request = new RequestHelper('https://munroapi.herokuapp.com/munros');
  request.get()
    .then((mountain) => {
      this.data = mountain;
      PubSub.publish('Mountain:all-mountain', this.data);
    })
    .catch((err) => {
      PubSub.publish('Mountain:error', err);
    });
};

module.exports = Mountains;
