const UrlDataReader = require('./urlDataReader')


describe("substack feed should be availbale", () => {
  const urlDataReader = UrlDataReader.create()

  test('feed.rss should return data', async () => {
    const data = await urlDataReader.readData("https://www.venturewhisper.com/feed.rss")
    expect(data).not.toBeUndefined()

  })

  
})