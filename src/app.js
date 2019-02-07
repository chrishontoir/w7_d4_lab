const Mountains = require('./models/mountain.js');
const MountainListView = require('./views/mountain_list_view.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const mountainListContainer = document.querySelector('#mountains');
  const mountainListView = new MountainListView(mountainListContainer);
  mountainListView.bindEvents();

  const mountains = new Mountains();
  mountains.getData();
})
