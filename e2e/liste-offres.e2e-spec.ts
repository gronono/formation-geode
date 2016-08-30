import { ListOffrePage } from './liste-offres.po';

describe('Page liste offre', function() {
  let page: ListOffrePage;

  beforeEach(() => {
    page = new ListOffrePage();
  });

  it('should display 2 offres', () => {
    page.navigateTo();
    expect(page.getOffreElements().count()).toEqual(2);
  });

  it('should select the clicked offre', () => {
    page.navigateTo();
    page.clickOnOffre(1);
    expect(page.getSelectedOffres().count()).toEqual(1);
    expect(page.getCurrentUrl()).toEqual("http://localhost:4200/offres/2");
  });
});
