import React,{useState} from 'react'
import './css/App.css';
import Menu from './components/Menu'
import List from './components/List'
import {Books} from './Data/books'


function App() {
  const [data, setData] = useState(Books)
  function onAdd(item){
    console.log(item)
    let temp = [...data]
    const id = temp[temp.length - 1].id ++
    item['id'] = id
    temp.push(item)
    setData([...temp])
  }
  return (
    <>
      <Menu title="Feriel Libro" onadd={onAdd}/>
      <List items ={data}/>
    </>
  );
}

export default App;
