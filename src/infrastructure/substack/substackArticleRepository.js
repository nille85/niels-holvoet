const RssReader = require("./../rss/rssReader")
const UrlDataReader = require("./../urlDataReader")
const Article = require("./../../domain/article/article")


class SubstackArticleRepository{

    constructor(urlDataReader, rssReader, url){
        this.url = url
        this.urlDataReader = urlDataReader
        this.rssReader = rssReader
    }

    static create(){
        return new SubstackArticleRepository(
            UrlDataReader.create(),
            RssReader.create(),
            "https://www.venturewhisper.com/feed.rss"
        )
    }

    async findLast(number){
        const allArticles = await this.findAll()
        if(allArticles.length > number){
            return allArticles.slice(0, number)
        }else{
            return allArticles
        }
    }

    async findAll(){
        const data = await this.urlDataReader.readData(this.url)
        const rssFeed = await this.rssReader.parseRssFeed(data)

        return rssFeed.items.map((item, index) => {
            const {title, description : benefit, link, imageUrl: image} = item
            return new Article(
                index, title, benefit, link, image
            )
        })
    }

}

module.exports = SubstackArticleRepository