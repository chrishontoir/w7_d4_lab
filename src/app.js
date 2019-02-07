const Mountains = require('./models/mountain.js');
const SelectMountain = require('./views/select-mountain.js');
const MountainListView = require('./views/mountain_list_view.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const mountainListContainer = document.querySelector('#mountains');
  const mountainListView = new MountainListView(mountainListContainer);
  mountainListView.bindEvents();

  const mountainSelectElement = document.querySelector('#select-region');
  const selectMountain = new SelectMountain(mountainSelectElement);
  selectMountain.bindEvents();

  const mountains = new Mountains();
  mountains.getData();
})
