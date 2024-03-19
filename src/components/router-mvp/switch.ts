import { rehderContent } from './checkstatus'

interface GameData {
  login: boolean
  start: boolean
  game: boolean
}

export function toggleGameData(key: keyof GameData): void {
  const storedData = localStorage.getItem('gameData')
  if (storedData) {
    const gameData: GameData = JSON.parse(storedData)
    gameData[key] = true
    Object.keys(gameData).forEach((k) => {
      if (k !== key) {
        gameData[k as keyof GameData] = false
      }
    })
    localStorage.setItem('gameData', JSON.stringify(gameData))
  }
  rehderContent()
}
