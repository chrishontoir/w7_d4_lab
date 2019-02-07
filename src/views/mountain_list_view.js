const PubSub = require('../helpers/pub_sub.js')
const MountainView = require('./mountain_view.js')

const MountainListView = function(container) {
  this.container = container;
}

MountainListView.prototype.bindEvents = function () {
  PubSub.subscribe('Mountain:all-mountain', (evt) => {
    this.data = event.detail;
    this.render();
  });
};

MountainListView.prototype.render = function () {
  this.data.forEach((mountain) => {
    const mountainView = new MountainView(this.container, mountain);
    mountainView.render();
  });
};

module.exports = MountainListView;
