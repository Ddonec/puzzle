import { title, buttonStart, buttonExit, gameInfo } from '../start-page/start'
import { toggleGameData } from '../router-mvp/switch'

export function startPageRender(): void {
  title.appendChildren(document.body)
  gameInfo.appendChildren(document.body)
  buttonStart.appendChildren(document.body)
  buttonExit.appendChildren(document.body)

  buttonStart.getNode().addEventListener('click', () => {
    toggleGameData('game')
  })
  buttonExit.getNode().addEventListener('click', () => {
    toggleGameData('login')
  })
}
