import { FinalPrepAngularPage } from './app.po';

describe('final-prep-angular App', () => {
  let page: FinalPrepAngularPage;

  beforeEach(() => {
    page = new FinalPrepAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
