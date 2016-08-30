export class ListOffrePage {
  navigateTo() {
    return browser.get('/offres');
  }

  getOffreElements() {
    return element.all(by.css('li'));
  }

  clickOnOffre(index) {
    this.getOffreElements().get(index).click();
  }

  getSelectedOffres() {
    return element.all(by.css('.selected'))
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }
}
