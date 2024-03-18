export interface BaseComponentProps {
    tag: string;
    className: string;
    text?: string;
}
export declare class BaseComponent<T extends HTMLElement> {
    protected element: T;
    constructor({ tag, className, text }: BaseComponentProps);
    getNode(): HTMLElement;
    addClass(value: string): void;
    appendChildren(container: HTMLElement): void;
}
