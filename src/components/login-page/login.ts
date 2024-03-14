import './login.css'
import { BaseComponent } from 'src/types/base-components'
import { Input } from './input'
import { Button } from './button'

export const div = new BaseComponent({
  tag: 'form',
  className: 'form',
  text: 'hi',
  parent: document.body,
})

export const inputName = new Input({
  tag: 'input',
  className: 'f',
  parent: div.getNode(),
  placeholder: 'Имя',
  type: 'text',
})

export const inputSurName = new Input({
  tag: 'input',
  className: 'f',
  parent: div.getNode(),
  placeholder: 'Фамилия',
  type: 'text',
})

export const SubmittButton = new Button({
  tag: 'button',
  className: 'f',
  parent: div.getNode(),
  text: 'Ok',
  type: 'submit',
})
