import { IjpPage } from './app.po';

describe('ijp App', function() {
  let page: IjpPage;

  beforeEach(() => {
    page = new IjpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
