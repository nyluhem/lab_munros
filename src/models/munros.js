const PubSub = require("../helpers/pub_sub.js");
const Request = require("../helpers/request_helper.js");

const Munros = function () {
  this.data = null;
};


Munros.prototype.getData = function (mountains) {
  const url = `https://munroapi.herokuapp.com/api/munros`;
  const request = new Request(url);
  request.get()
    .then((data) => {
      this.data = data;
      PubSub.publish("Munro:munros-ready", this.data);
      // PubSub.publish("Munros:all-regions-loaded", this.data);
    })
    // .then(() => {
    //   PubSub.subscribe("SelectRegion:change", (event))
    // })
    .catch((err) => {
      PubSub.publish("Munro:error", err);
    });

};


//
//
// Continents.prototype.handleDataReady = function (countries) {
//   const continentNames = this.getContinentNames(countries);
//   this.modelContinents(countries, continentNames);
// };
// //
// Continents.prototype.getContinentNames = function (countries) {
//
//     .filter((region, index, regions) => regions.indexOf(region) === index);
// };
//
// Continents.prototype.modelContinents = function (countries, continentNames) {
//   this.continents = continentNames.map((continentName) => {
//     return {
//       name: continentName,
//       countries: this.countriesByContinent(countries, continentName)
//     };
//   });
// };
//
// Continents.prototype.countriesByContinent = function (countries, continent) {
//   return countries.filter(country => country.region === continent);
// };
//
//
// munros.filter(munro => munro.region === region)

module.exports = Munros;
