import './login.css'
import { BaseComponent } from 'src/components/basecomponent/base-components'
import { Input } from './input'
import { Button } from './button'
// eslint-disable-next-line import/no-cycle
import { toggleGameData } from '../router-mvp/switch'

export const form = new BaseComponent({
  tag: 'form',
  className: 'form',
  text: 'hi',
})

export const inputName = new Input({
  tag: 'input',
  className: 'input-name',
  placeholder: 'Имя',
  type: 'text',
  minLength: 3,
})

export const inputSurName = new Input({
  tag: 'input',
  className: 'input-Sname',
  placeholder: 'Фамилия',
  type: 'text',
  minLength: 4,
})

export const SubmittButton = new Button({
  tag: 'button',
  className: 's-btn',
  text: 'Submit',
  type: 'button',
})

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

        toggleGameData('start')
      }
    })
  }
}
setupSaveButtonListener()
