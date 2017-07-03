import { BlogAngularPage } from './app.po';

describe('blog-angular App', () => {
  let page: BlogAngularPage;

  beforeEach(() => {
    page = new BlogAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
