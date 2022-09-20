const ResourceReader = require('./resourceReader')


describe("file should be read", () => {
  const resourceReader = ResourceReader.create()

  test('template.html should be read', () => {
    
    const html = resourceReader.readFile("tests/template.html")
    expect(html).toEqual('<h1>Test Success</h1>')
  })

  test('feed.rss should be read', () => {
    
    const result = resourceReader.readFile("tests/feed.rss")
    expect(result).not.toBeUndefined()
  })
})
