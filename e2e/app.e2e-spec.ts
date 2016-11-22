import { KetPage } from './app.po';

describe('ket App', function() {
  let page: KetPage;

  beforeEach(() => {
    page = new KetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
