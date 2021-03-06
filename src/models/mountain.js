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


  PubSub.subscribe("SelectMountain:selected-region", event => {
    const selectedRegion = event.detail;
    if (selectedRegion === "all") {
      PubSub.publish('Mountain:all-mountain-all', this.data);
    } else {
      const allMountains = this.mountainsByRegion(selectedRegion);
      PubSub.publish('Mountain:selected-mountains', allMountains);
    };
  })
};

Mountains.prototype.mountainsByRegion = function (region) {
  return this.data.filter(mountain => mountain.region === region);
  //
  // Mountains.prototype.returnedMountain = function(selectedRegion) {

}


module.exports = Mountains;
