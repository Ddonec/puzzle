import { BaseComponent } from '../basecomponent/base-components'
import { Button } from '../login-page/button'
import './start.css'

export const title = new BaseComponent({ tag: 'h1', className: 'title', text: 'Puzzle' })
export const welcomeText = new BaseComponent({
  tag: 'p',
  className: 'welcome',
  text: `Welcome, ${localStorage.getItem('Name') || 'Guest'} ${localStorage.getItem('LastName') || ''}!`,
})
export const gameInfo = new BaseComponent({
  tag: 'p',
  className: 'subtitle',
  text: `This is a mosaic game where you have to collect sentences from words, 
    and the words will be written on the cells of the mosaic. 
    You will need to collect 10 lines of words.`,
})

export const buttonStart = new Button({
  tag: 'button',
  className: 'start-btn',
  text: 'Play',
  type: 'button',
})
export const buttonExit = new Button({
  tag: 'button',
  className: 'exit-btn',
  text: 'Exit',
  type: 'button',
})
