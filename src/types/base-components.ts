export class BaseComponents {
  public create(data: string): void {
    document.createElement(data)
  }
  public textContent(data: string): void {
    document.textContent = data
  }
}
