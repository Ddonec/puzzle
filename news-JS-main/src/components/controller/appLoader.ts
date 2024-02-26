import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        const apiUrl = process.env.API_URL;
        const apiKey = process.env.API_KEY;
        if (apiUrl && apiKey) {
            super(apiUrl, { apiKey });
        }
    }
}
console.log(AppLoader);
export default AppLoader;
