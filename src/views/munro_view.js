const MunroView = function (container) {
  this.munrosContainer = container;
};

  MunroView.prototype.render = function (munroInfo) {
    const infoMunroName = document.createElement("h1");
    infoMunroName.textContent = munroInfo.name;
    this.munrosContainer.appendChild(infoMunroName);
    const munrosList = document.createElement("ul");

      const munrosHeight = document.createElement("li");
      munrosHeight.textContent = `Height: ${munroInfo.height}`;
      const munrosMeaning = document.createElement("li");
      munrosMeaning.textContent = `Meaning: ${munroInfo.meaning}`;
      munrosList.appendChild(munrosHeight);
      munrosList.appendChild(munrosMeaning);

    this.munrosContainer.appendChild(munrosList);
  };

  //
  // CountryInfoView.prototype.render = function (countryInfo) {
  //   const infoCountryName = document.createElement("h1");
  //   infoCountryName.textContent = countryInfo.name;
  //   const countryFlag = document.createElement("img");
  //   countryFlag.src = countryInfo.flag;
  //   const region = document.createElement("h2");
  //   region.textContent = "Region:";
  //   const infoCountryRegion = document.createElement("p");
  //   infoCountryRegion.textContent = countryInfo.region;
  //   const languages = document.createElement("h2");
  //   languages.textContent = "Languages:";
  //   // const infoCountryLanguagesList = document.createElement("ul");
  //   // infoCountryLanguagesList.textContent = "Languages:"
  //   // const infoCountryLanguages = document.createElement("li");
  //   // infoCountryLanguages.textContent = countryInfo.languages.name;
  //   // infoCountryLanguagesList.appendChild(infoCountryLanguages);
  //   const languageList = this.createLanguageList(countryInfo.languages)
  //
  //
  //   this.container.innerHTML = "";
  //   this.container.appendChild(infoCountryName);
  //   this.container.appendChild(countryFlag);
  //   this.container.appendChild(region);
  //   this.container.appendChild(infoCountryRegion);
  //   this.container.appendChild(languages);
  //   this.container.appendChild(languageList)
  //   // this.container.appendChild(infoCountryLanguagesList);
  // };
  //
  // CountryInfoView.prototype.createLanguageList = function (languages) {
  //   const list = document.createElement("ul");
  //
  //   languages.forEach((language) =>{
  //     const listItem = document.createElement("li");
  //     listItem.textContent = language.name;
  //     list.appendChild(listItem);
  //   });
  //   return list
  // };





  //in munro view this is individual munro, so just need to append and create items as we did for countries NOT continents.

module.exports = MunroView;
