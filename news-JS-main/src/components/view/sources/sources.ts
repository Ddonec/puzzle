import './sources.css';
import { NewsItem } from '../../../types/data.interface';
import { ErrorType } from '../../../types/errors.enum';

class Sources {
    draw(data: NewsItem[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        if (!sourceItemTemp) {
            console.error('Template element not found');
            return ErrorType.TemplateNotFound;
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const itemNameElement = sourceClone.querySelector('.source__item-name');
            const itemElement = sourceClone.querySelector('.source__item');

            if (itemNameElement && itemElement) {
                itemNameElement.textContent = item.name;
                itemElement.setAttribute('data-source-id', item.id.toString());
                fragment.append(sourceClone);
            }
        });

        const sourcesContainer = document.querySelector<HTMLElement>('.sources');
        if (!sourcesContainer) {
            console.error('Container element not found');
            return ErrorType.ContainerNotFound;
        }

        sourcesContainer.append(fragment);
    }
}

export { Sources, ErrorType };
