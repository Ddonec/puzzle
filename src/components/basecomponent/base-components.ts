export interface BaseComponentProps {
  tag: string
  className: string
  text?: string
  // parent: HTMLElement
}

export class BaseComponent<T extends HTMLElement> {
  protected element: T
  constructor({ tag, className, text }: BaseComponentProps) {
    this.element = document.createElement(tag) as T
    this.element.classList.add(className)
    if (text) {
      this.element.textContent = text
    }
    // if (parent) {
    //   parent.append(this.element)
    // }
  }
  public getNode(): HTMLElement {
    return this.element
  }

  public addClass(value: string): void {
    this.element.classList.add(value)
  }
  public appendChildren(container: HTMLElement): void {
    container.append(this.element)
  }
}
