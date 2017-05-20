import { SimpleFullstackFrontendPage } from './app.po';

describe('simple-fullstack-frontend App', () => {
  let page: SimpleFullstackFrontendPage;

  beforeEach(() => {
    page = new SimpleFullstackFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
