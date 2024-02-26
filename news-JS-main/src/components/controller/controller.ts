import AppLoader from './appLoader';
import { NewsSource, NewsData } from '../../types/data.interface';

class AppController extends AppLoader {
    public getSources(callback: (data?: NewsSource) => void): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data?: NewsData) => void): void {
        let target = e.target;
        const newsContainer = e.currentTarget;
        if (newsContainer instanceof HTMLElement) {
            while (target !== newsContainer) {
                if (target instanceof HTMLElement && target.classList.contains('source__item')) {
                    const sourceId = target.getAttribute('data-source-id');
                    if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                    return;
                }
                if (target instanceof Node && target.parentNode instanceof HTMLElement) {
                    target = target.parentNode;
                }
            }
        }
    }
}
export default AppController;
