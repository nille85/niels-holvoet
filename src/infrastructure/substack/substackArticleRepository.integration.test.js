
const SubstackArticleRepository = require('./substackArticleRepository')


describe("Articles should be read from substack", () => {
  const substackArticleRepository = SubstackArticleRepository.create()

  test('More than zero articles should be available', async () => {
    const articles = await substackArticleRepository.findAll()
    
    expect(articles.length).toBeGreaterThan(0)
  })

  test('More than zero articles should be available', async () => {
    const articles = await substackArticleRepository.findLast(4)
    
    expect(articles.length).toBeGreaterThan(0)
  })

  
})
