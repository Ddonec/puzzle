import './login.css';
import { BaseComponent, BaseComponentProps } from 'src/components/basecomponent/base-components';
interface ButtonProps extends BaseComponentProps {
    type: string;
}
export declare class Button extends BaseComponent<HTMLButtonElement> {
    constructor({ className, text, type }: ButtonProps);
}
export {};
