import './login.css'
import { BaseComponent, BaseComponentProps } from 'src/types/base-components'

interface InputProps extends BaseComponentProps {
  placeholder: string
  type: string
}
export class Input extends BaseComponent<HTMLInputElement> {
  constructor({ tag, className, parent, placeholder, type }: InputProps) {
    super({
      tag,
      className,
      parent,
    })
    this.element.setAttribute('placeholder', placeholder)
    if (tag === 'input') {
      const ElementInput = this.element
      ElementInput.type = type
      ElementInput.required = true
    }
  }
}
