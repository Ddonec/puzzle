import './news.css';
import { NewsItem } from '../../../types/data.interface';

class News {
    draw(data: NewsItem[]) {
        const news = data.length >= 10 ? data.slice(0, 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        if (!newsItemTemp) {
            console.error('Template element not found');
            return;
        }

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) {
                const newsItem = newsClone.querySelector('.news__item');
                if (newsItem) {
                    newsItem.classList.add('alt');
                }
            }

            const newsMetaPhoto = newsClone.querySelector<HTMLStyleElement>('.news__meta-photo');
            if (newsMetaPhoto) {
                newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            const newsMetaAuthorElement = newsClone.querySelector('.news__meta-author');
            if (newsMetaAuthorElement) {
                newsMetaAuthorElement.textContent = item.author || item.source.name;
            }

            const newsMetaDateElement = newsClone.querySelector('.news__meta-date');
            if (newsMetaDateElement) {
                newsMetaDateElement.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            const newsDescriptionTitleElement = newsClone.querySelector('.news__description-title');
            if (newsDescriptionTitleElement) {
                newsDescriptionTitleElement.textContent = item.title;
            }

            const newsDescriptionSourceElement = newsClone.querySelector('.news__description-source');
            if (newsDescriptionSourceElement) {
                newsDescriptionSourceElement.textContent = item.source.name;
            }

            const newsDescriptionContentElement = newsClone.querySelector('.news__description-content');
            if (newsDescriptionContentElement) {
                newsDescriptionContentElement.textContent = item.description || '';
            }

            const newsReadMoreLink = newsClone.querySelector('.news__read-more a');
            if (newsReadMoreLink) {
                newsReadMoreLink.setAttribute('href', item.url);
            }

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector<HTMLElement>('.news');
        if (!newsContainer) {
            console.error('News container element not found');
            return;
        }

        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
