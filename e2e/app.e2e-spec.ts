import { Angular2AdminPage } from './app.po';

describe('angular2-admin App', () => {
  let page: Angular2AdminPage;

  beforeEach(() => {
    page = new Angular2AdminPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
