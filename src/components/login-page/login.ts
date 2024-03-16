import './login.css'
import { BaseComponent } from 'src/components/basecomponent/base-components'
import { Input } from './input'
import { Button } from './button'

export const form = new BaseComponent({
  tag: 'form',
  className: 'form',
  text: 'hi',
  parent: document.body,
})

export const inputName = new Input({
  tag: 'input',
  className: 'input-name',
  parent: form.getNode(),
  placeholder: 'Имя',
  type: 'text',
  minLength: 3,
  // validationParams: [0, 3, /^[A-Z][a-zA-Z-]{2,}$/],
})
// export const err1 = new BaseComponent({
//   tag: 'p',
//   className: 'error',
//   text: '',
//   parent: form.getNode(),
// })

export const inputSurName = new Input({
  tag: 'input',
  className: 'input-Sname',
  parent: form.getNode(),
  placeholder: 'Фамилия',
  type: 'text',
  minLength: 4,
  // validationParams: [0, 4, /^[A-Z][a-zA-Z-]{2,}$/],
})

// export const err = new BaseComponent({
//   tag: 'p',
//   className: 'error',
//   text: '',
//   parent: form.getNode(),
// })

export const SubmittButton = new Button({
  tag: 'button',
  className: 's-btn',
  parent: form.getNode(),
  text: 'Submit',
  type: 'submit',
})

// SubmittButton.getNode().addEventListener('click', (event: MouseEvent) => {
//   event.preventDefault()

//   if (inputName.isValid && inputSurName.isValid) {
//     form.getNode().dispatchEvent(new Event('submit'))
//   } else {
//     inputName.displayError('Ошибка валидации')
//     inputSurName.displayError('Ошибка валидации')
//   }
// })

function validateForm(first: string, second: string): boolean {
  if (first.trim().length < 3 || second.trim().length < 4) {
    return false
  }
  return true
}
export function setupSaveButtonListener(): void {
  const saveButton = SubmittButton.getNode()
  if (saveButton) {
    saveButton.addEventListener('click', () => {
      const input1 = (inputName.getNode() as HTMLInputElement).value
      const input2 = (inputSurName.getNode() as HTMLInputElement).value

      if (validateForm(input1, input2)) {
        localStorage.setItem('Name', input1)
        localStorage.setItem('LastName', input2)
      }
    })
  }
}
setupSaveButtonListener()
