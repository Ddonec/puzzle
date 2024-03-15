import './login.css'
import { BaseComponent, BaseComponentProps } from 'src/components/basecomponent/base-components'

interface InputProps extends BaseComponentProps {
  placeholder: string
  type: string
  minLength: number
  // validationParams: [number, number, RegExp]
}

export class Input extends BaseComponent<HTMLInputElement> {
  public isValid = false

  constructor({ tag, className, parent, placeholder, type, minLength }: InputProps) {
    super({
      tag,
      className,
      parent,
    })

    this.element.setAttribute('placeholder', placeholder)
    if (tag === 'input') {
      this.element.type = type
      this.element.required = true
      this.element.minLength = minLength

      this.element.addEventListener('keydown', (event: KeyboardEvent) => {
        if (!/^[a-zA-Z-]$/.test(event.key) && !['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'].includes(event.key)) {
          event.preventDefault()
        }
      })

      this.element.addEventListener('input', (event) => {
        const inputData = this.element.value
        const firstChar = inputData.charAt(0).toUpperCase() + inputData.slice(1)
        const value = firstChar.replace(/[^a-zA-Z-]/g, '')
        const target = event.target as HTMLInputElement
        if (minLength !== undefined && target.value.length < minLength) {
          return
        }
        this.element.value = value
      })
    }
  }
}

// this.element.addEventListener('input', () => {
//   this.validateInput(validationParams)
// })

// this.element.addEventListener('input', () => {
//   if (!this.isValid || this.element.value.trim() === '') {
//     this.displayError('Ошибка валидации')
//   } else {
//     this.hideError()
//   }
// })

// private validateInput([firstCharIndex, minLength, regex]: [number, number, RegExp]): void {
//   const inputValue = this.element.value
//   if (
//     inputValue.length < minLength ||
//     inputValue.charAt(firstCharIndex) !== inputValue.charAt(firstCharIndex).toUpperCase() ||
//     !regex.test(inputValue)
//   ) {
//     this.isValid = false
//   } else {
//     this.isValid = true
//   }
// }

// public displayError(message: string): void {
//   const errorElement = this.element.nextElementSibling
//   if (errorElement instanceof HTMLElement) {
//     errorElement.textContent = message
//   }
// }

// public hideError(): void {
//   const errorElement = this.element.nextElementSibling
//   if (errorElement instanceof HTMLElement) {
//     errorElement.textContent = ''
//   }
// }
