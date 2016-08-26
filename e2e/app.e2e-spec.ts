import { FormationGeodePage } from './app.po';

describe('formation-geode App', function() {
  let page: FormationGeodePage;

  beforeEach(() => {
    page = new FormationGeodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
