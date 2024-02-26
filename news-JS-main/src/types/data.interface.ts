export interface NewsItem {
    id: string;
    url: string;
    urlToImage: string;
    name: string;
    author: string;
    publishedAt: string;
    title: string;
    description: string;
    source: { name: string; id: string };
}

export interface NewsData extends NewsItem {
    category?: string;
    language?: string;
    country?: string;
    articles?: Articles[];
}

export interface NewsSource {
    status: string;
    sources: NewsData[];
}
export interface Articles {
    id: string;
    url: string;
    urlToImage: string;
    author: string;
    publishedAt: string;
    name: string;
    title: string;
    description: string;
    source: { name: string; id: string };
}
