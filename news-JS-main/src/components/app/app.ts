import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { isNullOrUndefined } from '../../types/typeCheck.functions';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const abc = isNullOrUndefined(document.querySelector('.sources'));
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
