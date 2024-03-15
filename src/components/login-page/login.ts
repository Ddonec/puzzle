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
  className: 'f',
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
  className: 'f',
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
  className: 'f',
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
