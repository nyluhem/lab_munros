const PubSub = require('../helpers/pub_sub.js');
const Munros = require('../models/munros.js');

const SelectRegion = function (element) {
  this.element = element;
};

SelectRegion.prototype.bindEvents = function () {
  PubSub.subscribe("Munro:munros-ready", (evt) => {
    const allRegions = evt.detail;
    console.log(allRegions)
    this.populate(allRegions)
  });
  this.element.addEventListener("change", (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish("SelectRegion:change", selectedIndex);
  });
};

  SelectRegion.prototype.populate = function (munrosData) {
    const regions = munrosData.map(munro => munro.region)
      .filter((region, index, regions) => regions.indexOf(region) === index);
    regions.forEach((region, index) => {
      const option = document.createElement("option");
      option.textContent = region;
      option.value = index;
      this.element.appendChild(option);
    });
  };


module.exports = SelectRegion;
