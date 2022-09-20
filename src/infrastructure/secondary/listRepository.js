class ListRepository{
    constructor(){
        this.list = []
    }

    save(entity){
        this.list.push(entity)
    }

    findAll(){
        return this.list
    }
    
}

module.exports = ListRepository