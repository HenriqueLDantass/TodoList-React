import { useState } from 'react';
import './App.css';

function App() {

  let [lista, setLista] = useState([""]);
  let [NovoItem, setNovoItem] = useState("5464")



  return (
    <div className='container'>
      <h1>Todo List</h1>
      <input value={NovoItem} onChange={value => setNovoItem(value.target.value)} type="text" />
      <button onClick={() => AdiconarItem()}>Adicionar</button>
      <ul className='Lista'>
        {lista.map((item, index) => (
          <li key={index}>{item}
            <button onClick={() => DeletarItem(index)}>
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
  function AdiconarItem() {
    setLista([...lista, NovoItem])
    setNovoItem("")
  }
  function DeletarItem(index) {
    let TemporarioArray = [...lista]
    TemporarioArray.splice(index, 1)
    setLista(TemporarioArray);
  }

}

export default App;
