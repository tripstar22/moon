import { browser, element, by } from 'protractor';

export class MoonPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('moon-root h1')).getText();
  }
}
