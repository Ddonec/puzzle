import './news.css';
import { NewsItem } from '../../../types/data.interface';
import { isNullOrUndefined } from '../../../types/typeCheck.functions';

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
                const newsItem = isNullOrUndefined(newsClone.querySelector('.news__item'));
                newsItem.classList.add('alt');
            }

            const newsMetaPhoto = newsClone.querySelector<HTMLStyleElement>('.news__meta-photo');
            if (newsMetaPhoto) {
                newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            const newsMetaAuthorElement = isNullOrUndefined(newsClone.querySelector('.news__meta-author'));
            newsMetaAuthorElement.textContent = item.author || item.source.name;

            const newsMetaDateElement = isNullOrUndefined(newsClone.querySelector('.news__meta-date'));
            newsMetaDateElement.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const newsDescriptionTitleElement = isNullOrUndefined(newsClone.querySelector('.news__description-title'));
            newsDescriptionTitleElement.textContent = item.title;

            const newsDescriptionSourceElement = isNullOrUndefined(
                newsClone.querySelector('.news__description-source')
            );
            newsDescriptionSourceElement.textContent = item.source.name;

            const newsDescriptionContentElement = isNullOrUndefined(
                newsClone.querySelector('.news__description-content')
            );
            newsDescriptionContentElement.textContent = item.description || '';

            const newsReadMoreLink = isNullOrUndefined(newsClone.querySelector('.news__read-more a'));
            newsReadMoreLink.setAttribute('href', item.url);

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
