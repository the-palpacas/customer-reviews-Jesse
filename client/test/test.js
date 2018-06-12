const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3001/1/';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width}, ${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

describe('Shop Reviews', () => {

  beforeEach(async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'});
  });

  test('Header is correct', async () => {
    const title = await page.$eval('h4', e => e.innerText);
    expect(title).toEqual('Reviews★★★★★(55)');
  });

});