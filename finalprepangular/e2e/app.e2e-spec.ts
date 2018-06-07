import { FinalprepPage } from './app.po';

describe('finalprep App', () => {
  let page: FinalprepPage;

  beforeEach(() => {
    page = new FinalprepPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
