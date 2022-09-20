const Mustache = require("mustache")
const ResourceReader = require("./../resourceReader")

class TemplateRenderer{

    constructor(template){
        this.template = template
    }

    static createFromFile(templateFilePath){
        try {
            const resourceReader = ResourceReader.create()
            const template = resourceReader.readFile(templateFilePath)
            return new TemplateRenderer(template)
          } catch (err) {
            throw Error(`template with ${templateFilePath} could not be read, detail: ${err.message}`)
        }
    }


    renderWithData(data){
        console.log(this.template)
        return Mustache.render(this.template, data)
    }

}

module.exports = TemplateRenderer