import App from './components/app/app';
import './global.css';
import { darkLightSwapper } from './components/view/slider';

const app = new App();
app.start();

const slider = document.getElementById('slider') as HTMLInputElement;
slider.addEventListener('change', () => {
    darkLightSwapper(slider);
});
