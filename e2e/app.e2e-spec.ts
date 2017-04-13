import { FirstA4Page } from './app.po';

describe('first-a4 App', () => {
  let page: FirstA4Page;

  beforeEach(() => {
    page = new FirstA4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
