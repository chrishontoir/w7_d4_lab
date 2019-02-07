const PubSub = require('../helpers/pub_sub.js');

const SelectMountain = function(element) {
  this.element = element;
};

SelectMountain.prototype.bindEvents = function() {
  PubSub.subscribe('Mountain:all-mountain', (event) => {
    const allMountainData = event.detail;
    this.populate(allMountainData);

  });

  this.element.addEventListener('change', (event) => {
    const selectedRegion = event.target.value;
    console.log(selectedRegion);
    PubSub.publish('SelectMountain:selected-region', selectedRegion);
  });
};

SelectMountain.prototype.populate = function(allMountains) {
  const allRegions = allMountains.map((mountain) => {
    return mountain.region;
  });
  uniqueRegions = new Set(allRegions);
  array = Array.from(uniqueRegions);
  console.log(array);

  array.forEach((region) => {
    const option = document.createElement('option');
    option.textContent = region;
    option.value = region;
    console.log(option);
    this.element.appendChild(option);
  })
};

module.exports = SelectMountain;
