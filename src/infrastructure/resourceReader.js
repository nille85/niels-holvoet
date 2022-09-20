const path = require('path')
const fs = require('fs')


class ResourceReader{

    constructor(path, fs){
        this.fs = fs
        this.path = path
    }

    static create(){
        return new ResourceReader(path, fs)
    }

    readFile(filePath){
        const templateDirPath = this.path.join(__dirname, '../../resources')
        try {
            const fullPath = `${templateDirPath}/${filePath}`
            console.log(`fullPath is ${fullPath}`)
            const html = this.fs.readFileSync(fullPath, 'utf-8')
            return html
          } catch (err) {
            throw Error(`file with path ${filePath} could not be read from resources directory ${templateDirPath}, detail: ${err.message}`)
        }
    }
}

module.exports = ResourceReader