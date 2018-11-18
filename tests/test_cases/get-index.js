const { expect } = require("chai");
const cheerio = require("cheerio");
const when = require("../steps/when");
const { init } = require("../steps/init");

describe(`When we invoke the GET / endpoint`, () => {
  before(async () => await init());

  it(`Should return a search box and a submit button`, async () => {
    const res = await when.we_invoke_get_index();

    expect(res.statusCode).to.equal(200);
    expect(res.headers["content-type"]).to.equal("text/html; charset=UTF-8");
    expect(res.body).to.not.be.null;

    const $ = cheerio.load(res.body);
    const search_box = $("#theme");
    expect(search_box.length).to.equal(1);
    const submit_button = $("#theme~button");
    expect(submit_button.length).to.equal(1);
  });

  it(`Should return the index page with 8 restaurants`, async () => {
    const res = await when.we_invoke_get_index();

    expect(res.statusCode).to.equal(200);
    expect(res.headers["content-type"]).to.equal("text/html; charset=UTF-8");
    expect(res.body).to.not.be.null;

    const $ = cheerio.load(res.body);
    const restaurants = $(".restaurant", "#restaurantsUl");
    expect(restaurants.length).to.equal(8);
  });
});
