const axios = require("axios")

class UrlDataReader{
    constructor(axios){
        this.axios = axios
    }

    static create(){
        return new UrlDataReader(axios)
    }

    async readData(url){
        return this.axios.get(url).then(response => {return response.data})
           
      }

}

module.exports = UrlDataReader