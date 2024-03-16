// eslint-disable-next-line import/no-cycle
import { form, inputName, inputSurName, SubmittButton } from '../login-page/login'

export function loginPageRender(): void {
  form.appendChildren(document.body)
  inputName.appendChildren(form.getNode())
  inputSurName.appendChildren(form.getNode())
  SubmittButton.appendChildren(form.getNode())
}
