import { Options } from '../../types/options.type';
import { ErrorTypes400 } from '../../types/errors.enum';
class Loader {
    private baseLink: string;
    private options: Readonly<Options>;
    constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: { endpoint: string; options?: Options },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === ErrorTypes400.Unauthorized || res.status === ErrorTypes400.NotFound) {
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            } else {
                console.error(`An error occurred: ${res.status} ${res.statusText}`);
            }
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Options, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load<T>(method: string, endpoint: string, callback: (data?: T) => void, options: Options = {}): Promise<void> {
        return fetch(this.makeUrl(options, endpoint), { method })
            .then((res) => this.errorHandler(res))
            .then((res) => res.json())
            .then((data?: T) => callback(data))
            .catch((err) => console.error(err));
    }
}
export default Loader;
