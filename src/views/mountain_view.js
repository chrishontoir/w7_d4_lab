const MountainView = function(container, mountain) {
  this.mountainsContainer = container;
  this.mountain = mountain;
}

MountainView.prototype.render = function () {
  const mountainContainer = document.createElement('div');
  // mountainContainer.classlist.add('mountain');
  const mountainName = document.createElement('h1');
  mountainName.textContent = this.mountain.name;
  mountainContainer.appendChild(mountainName);

  const mountainInfo = document.createElement('ul');
  mountainContainer.appendChild(mountainInfo);

  const mountainHeight = document.createElement('li');
  mountainHeight.textContent = `Height: ${this.mountain.height}`;
  mountainInfo.appendChild(mountainHeight);

  const mountainRegion = document.createElement('li');
  mountainRegion.textContent = `Region: ${this.mountain.region}`;
  mountainInfo.appendChild(mountainRegion);

  const mountainMeaning = document.createElement('li');
  mountainMeaning.textContent = `Meaning: ${this.mountain.meaning}`;
  mountainInfo.appendChild(mountainMeaning);

  this.mountainsContainer.appendChild(mountainContainer);



};

module.exports = MountainView;
