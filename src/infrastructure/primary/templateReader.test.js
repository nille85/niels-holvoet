const TemplateReader = require('./templateReader')



test('file should be read', () => {
  const templateReader = TemplateReader.create()
  const html = templateReader.readTemplate("tests/test.txt")
  expect(html).toEqual('<h1>Test Success</h1>')
});