const TemplateRenderer = require("./templateRenderer")
const express = require('express')
const app = express()
const path = require('path')

class WebServer{
    constructor(articleRepository){
        this.articleRepository = articleRepository
    }

    static create(articleRepository){
        return new WebServer(   
            articleRepository
        )
    }

    run = () => {
        const repository = this.articleRepository

        //routes
        app.get('/', function(req, res){
            try {
                const templateRenderer = TemplateRenderer.createFromFile("index.html")
                const articles = repository.findAll()
                const data = {articles : articles}
                const html = templateRenderer.renderWithData(data)
                res.send(html)
              } catch (err) {
                console.log(err)
                res.send("Internal Server Error")
            }
        })
       
        //static folders
        app.use('/static', express.static(path.join(__dirname, '../../../public')))
        app.listen(3000)
    }
}

module.exports = WebServer


