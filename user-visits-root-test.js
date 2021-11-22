const {assert} = require('chai');

describe("User visits root", () => {
  describe("posting a quote", () => {
    it("saves quote and metadata submitted by user", () =>{
      const quote = "2 + 2 is 4. Minus 1. That's 3 quick math"
      const attributed = "Michael Dapaah"
      const source = "BBC"

      browser.url("/")
      browser.setValue("textarea[id=quote]", quote)
      browser.setValue("input[id=attributed]", attributed)
      browser.setValue("input[id=source]", source)
      browser.click("input[type=submit]")

       assert.include(browser.getText('#quotes'), quote);
      assert.include(browser.getText('#quotes'), attributed);
      assert.include(browser.getText('#quotes'), source);
    })
  })
})