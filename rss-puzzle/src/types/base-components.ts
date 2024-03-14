export class BaseComponents {
  public create(data: string) {
    document.createElement(data)
  }
  public textContent(data: string) {
    document.textContent = data
  }
}
