const RssReader = require('./rssReader')
const ResourceReader = require("./../resourceReader")


describe("rss reader should work correctly", () => {
    const resourceReader = ResourceReader.create()
    const rssReader = RssReader.create()
    test('short feed should be read correctly', async () => {
        const rssData = resourceReader.readFile("tests/shortfeed.rss")
        rssReader.parseRssFeed(rssData).then(rss => {
            
          expect(rss.title).toEqual("Venture Whisper")
          expect(rss.description).toEqual("Thoughts and insights about how to create valuable digital solutions, make better digital investments, and create an efficient organization.")
          expect(rss.link).toEqual("https://www.venturewhisper.com")
          expect(rss.items.length).toEqual(2)
        }) 
      })

})
