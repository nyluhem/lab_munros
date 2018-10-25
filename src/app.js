const Munro = require('./models/munros.js');
const MunroListView = require("./views/munros_list_view.js");
const SelectedRegion = require("./views/selected_region.js")

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const munroListContainer = document.querySelector("#munros");
  const munroListView = new MunroListView(munroListContainer);
  munroListView.bindEvents();

  const selectedElement = document.querySelector("select#select-region")
  const regionDropdown = new SelectedRegion(selectedElement);
  regionDropdown.bindEvents();

  const munros = new Munro()
  munros.getData()
});
