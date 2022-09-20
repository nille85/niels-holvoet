
const WebServer = require('./infrastructure/primary/webServer')
const ListRepository = require('./infrastructure/secondary/listRepository')

const articleRepository = new ListRepository()
const Article = require('./domain/article/article')


const articles = [
    new Article(
        7,
        "Demystifying Mission, Vision, and Values",
        "Learn how to draft your own mission, vision, and values",
        "https://www.venturewhisper.com/p/demystifying-mission-vision-and-values",
        "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fc151f256-a9d2-42fa-9515-600188e7c2cf_4256x2832.jpeg"
    ),
    new Article(
        6,
        "The Disconnection Between Business & Software Engineering",
        "Create valuable software that is aligned with the desired outcomes.",
        "https://www.venturewhisper.com/p/solving-the-disconnection-between",
        "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3639ca8f-ba02-4bfc-88ab-430d8eef0414_2500x2000.jpeg"
    ),
    new Article(
        7,
        "Demystifying Mission, Vision, and Values",
        "Learn how to draft your own mission, vision, and values",
        "https://www.venturewhisper.com/p/demystifying-mission-vision-and-values",
        "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fc151f256-a9d2-42fa-9515-600188e7c2cf_4256x2832.jpeg"
    ),
    new Article(
        6,
        "The Disconnection Between Business & Software Engineering",
        "Create valuable software that is aligned with the desired outcomes.",
        "https://www.venturewhisper.com/p/solving-the-disconnection-between",
        "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3639ca8f-ba02-4bfc-88ab-430d8eef0414_2500x2000.jpeg"
    )
]


articles.forEach(article => {
    articleRepository.save(article)
})


const webServer = WebServer.create(
    articleRepository
)

webServer.run()
