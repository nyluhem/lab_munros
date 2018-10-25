const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('../views/munro_view.js');

const MunroListView = function (container) {
  this.container = container;
};

MunroListView.prototype.bindEvents = function () {
  PubSub.subscribe("Munro:munros-ready", (evt) => {
    this.data = evt.detail;
    // console.log(this.data);
    this.render(this.data)
  });
};

MunroListView.prototype.render = function () {
  this.data.forEach((datum) => {
    const munroView = new MunroView(this.container);
    // console.log(munroView)
    munroView.render(datum);
  });
};
// const munroView = new MunroView()
// munrosData.forEach((munro) => {
//   console.log(munro);
//   console.log(munrosData);
//   munroView.render();


module.exports = MunroListView;
