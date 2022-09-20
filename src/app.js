
const WebServer = require('./infrastructure/web/webServer')
const SubstackArticleRepository = require('./infrastructure/substack/substackArticleRepository')

const webServer = WebServer.create(
    SubstackArticleRepository.create()
)

webServer.run()
