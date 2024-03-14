import { BaseComponents } from 'src/types/base-components'

export function CreateDrikki(): BaseComponents {
  const input1 = new BaseComponents()
  input1.create('div')
  input1.textContent('Hello Drikki')
  return input1
}
