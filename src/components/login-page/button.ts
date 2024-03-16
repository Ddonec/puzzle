import './login.css'
import { BaseComponent, BaseComponentProps } from 'src/components/basecomponent/base-components'

interface ButtonProps extends BaseComponentProps {
  type: string
}
export class Button extends BaseComponent<HTMLButtonElement> {
  constructor({ className, text, type }: ButtonProps) {
    super({
      tag: 'button',
      className,
      text,
    })
    if (type === 'button' || type === 'submit' || type === 'reset') {
      this.element.type = type
    }
  }
}
