import { loginPageRender } from '../pages/login-page'
import { startPageRender } from '../pages/start-page'
import { PlayPageRender } from '../play-page/play'

interface GameData {
  login: boolean
  start: boolean
  game: boolean
}

function checkLSData(): void {
  const storedData = localStorage.getItem('gameData')
  if (!storedData) {
    const gameData: GameData = {
      login: true,
      start: false,
      game: false,
    }
    localStorage.setItem('gameData', JSON.stringify(gameData))
  }
}

export function rehderContent(): void {
  checkLSData()
  document.body.innerHTML = ''
  const storedData = localStorage.getItem('gameData')
  if (storedData !== null) {
    const gameData: GameData = JSON.parse(storedData)

    if (gameData.login === true) {
      loginPageRender()
    }

    if (gameData.start === true) {
      startPageRender()
    } else {
      console.log('Game is not started')
    }

    if (gameData.game === true) {
      PlayPageRender()
    } else {
      console.log('No game is in progress')
    }
  }
}
