const xml2js = require('xml2js')
const {RssFeed, Item} = require("./rssFeed")

class RssReader{

    constructor(xmlTransformer){
        this.xmlTransformer = xmlTransformer
    }

    static create(){
        return new RssReader(xml2js)
    }

    async parseRssFeed(rssData){
        const options = {
            explicitArray: false,
            mergeAttrs: true
        };
        return this.xmlTransformer.parseStringPromise(rssData, options)
        .then(data => {
            const {channel} = data.rss
            const {title, description, item : items, link} = channel
            const feedItems = items.map(item => {
                return new Item(
                    item.title,
                    item.description, 
                    item.link, 
                    item.pubDate, 
                    item.enclosure.url
                )
            })
            return new RssFeed(title, description, link, feedItems)
        })     
    }



}

module.exports = RssReader