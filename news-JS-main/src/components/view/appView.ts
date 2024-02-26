import News from './news/news';
import { Sources, ErrorType } from './sources/sources';
import { NewsData, NewsSource } from '../../types/data.interface';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data?: NewsData) {
        const values = data?.articles || [];
        this.news.draw(values);
    }

    drawSources(data?: NewsSource) {
        const values = data?.sources ? data?.sources : [];
        const error = this.sources.draw(values);
        if (error === ErrorType.TemplateNotFound) {
            console.error('Template element not found');
        } else if (error === ErrorType.ContainerNotFound) {
            console.error('Container element not found');
        }
    }
}

export default AppView;
