const TemplateRenderer = require('./templateRenderer')



test('template should be rendered correctly', () => {
  const template = "{{title}} with {{benefit}}"
  const templateRenderer = new TemplateRenderer(template)
  const data = {
    title : "the title",
    benefit: "the benefit"
  }
  const result = templateRenderer.renderWithData(data)
  expect(result).toEqual("the title with the benefit")
})