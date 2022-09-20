const Mustache = require("mustache")
const TemplateReader = require("./templateReader")

class TemplateRenderer{

    constructor(template){
        this.template = template
    }

    static createFromFile(templateFile){
        const templateReader = TemplateReader.create()
        const template = templateReader.readTemplate(templateFile)
        return new TemplateRenderer(template)
    }
    

    renderWithData(data){
        console.log(this.template)
        return Mustache.render(this.template, data)
    }

}

module.exports = TemplateRenderer