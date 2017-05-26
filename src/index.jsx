import 'index.css'
import { render } from 'react-dom'
import Tabela from 'tabela'
import Contatos from 'contatos'


let App = (props) => {
return (<div> <Tabela contatos={Contatos}/> </div>)
}

document.addEventListener('DOMContentLoaded', (evt) => {
  render(<App />, document.querySelector('#app'))
})
