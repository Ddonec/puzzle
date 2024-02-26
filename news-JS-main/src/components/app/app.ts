import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { isNullOrUndefined } from '../../helpers/typeCheck';

class App {
    private controller = new AppController();
    private view = new AppView();

    public start(): void {
        const abc: Element = isNullOrUndefined(document.querySelector('.sources'));
        abc.addEventListener('click', (e: Event) => {
            this.controller.getNews(e, (data) => {
                this.view.drawNews(data);
            });
        });
        this.controller.getSources((data) => {
            this.view.drawSources(data);
        });
    }
}

export default App;
