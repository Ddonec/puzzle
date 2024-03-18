import { BaseComponent } from '../basecomponent/base-components'
import { Button } from '../login-page/button'
import { toggleGameData } from '../router-mvp/switch'

import './play.css'

export const titlePlay = new BaseComponent({ tag: 'h1', className: 'title', text: 'Puzzle' })
export const sorryText = new BaseComponent({
  tag: 'p',
  className: 'sorry-msg',
  text: 'So sorry, i cant make this application in time =(',
})

export const buttonExit = new Button({
  tag: 'button',
  className: 'exit-btn',
  text: 'Exit',
  type: 'button',
})

export function PlayPageRender(): void {
  titlePlay.appendChildren(document.body)
  sorryText.appendChildren(document.body)
  buttonExit.appendChildren(document.body)
  buttonExit.getNode().addEventListener('click', () => {
    toggleGameData('start')
  })
}
