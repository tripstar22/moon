import { MoonPage } from './app.po';

describe('moon App', () => {
  let page: MoonPage;

  beforeEach(() => {
    page = new MoonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('moon works!');
  });
});
