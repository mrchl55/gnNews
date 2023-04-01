class News {

    title: string;
    description: string;
    url: string;
    urlToImage: string;
    content: string;
    source: {
        name: string,
        id: string
    };
    author: string;
    publishedAt: Date;


    constructor(title: string, description: string,
                url: string,
                urlToImage: string,
                content: string,
                source: {
                    name: string,
                    id: string
                },
                author: string,
                publishedAt: Date) {
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.content = content;
        this.source = source;
        this.author = author;
        this.publishedAt = publishedAt;


    }
}

export default News