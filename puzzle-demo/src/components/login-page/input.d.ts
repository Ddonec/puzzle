import './login.css';
import { BaseComponent, BaseComponentProps } from 'src/components/basecomponent/base-components';
interface InputProps extends BaseComponentProps {
    placeholder: string;
    type: string;
    minLength: number;
}
export declare class Input extends BaseComponent<HTMLInputElement> {
    isValid: boolean;
    constructor({ tag, className, placeholder, type, minLength }: InputProps);
}
export {};
