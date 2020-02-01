const { launch } = require("qawolf");
const selectors = require("../selectors/googleSearchTest");

describe('googleSearchTest', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: "https://google.com/" });
  });

  afterAll(() => browser.close());

  it('can type into "q" input', async () => {
    await browser.type(selectors[0], "instagram");
  });

  it('can Enter', async () => {
    await browser.type(selectors[1], "↓Enter↑Enter");
  });

  it('can click "Görseller" link', async () => {
    await browser.click(selectors[2]);
  });

  it('can click "960 × 960" link', async () => {
    await browser.click(selectors[3]);
  });
});