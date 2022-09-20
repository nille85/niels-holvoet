class RssFeed{

    constructor(title, description, link, items){
        this.title = title
        this.description = description
        this.link = link
        this.items = items
    }


}

class Item{
    constructor(title, description, link, pubDate, imageUrl){
        this.title = title
        this.description = description
        this.link = link
        this.pubDate = pubDate
        this.imageUrl = imageUrl
    }
}



module.exports = {RssFeed, Item}