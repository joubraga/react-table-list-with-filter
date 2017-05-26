import { Component }  from 'react'
import Contatos  from 'contatos'

class Tabela extends Component {

    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    updateSearch(event){
        this.setState({search: event.target.value.substring(0,20)})
    }

    render(){
        let filterdeContacts = Contatos.filter(
            (contato) => {
                return contato.nome.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1
            }
        )
        const nameList = filterdeContacts.map( value => {
            return (
               <tr>
                 <td> {value.id} </td>
                 <td> {value.nome} </td>
                 <td> {value.email} </td>
               </tr>
            )
        })
        return (

            <div className="container">
              <div>
                <label htmlFor="">Pesquisar por nome</label>
                <input type="text" 
                       value={this.state.search} 
                       onChange={this.updateSearch.bind(this)} />
              </div>
                
                <table className="highlight">
                    <thead> 
                        <tr> 
                            <td>Codigo</td>
                            <td>Nome</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {nameList}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tabela