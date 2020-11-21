import React,{useState,useEffect} from 'react'
import './css/App.css';
import Menu from './components/Menu'
import List from './components/List'
import {copyBooks,Books} from './Data/books'


function App() {
  const [data, setData] = useState(Books)
  const [copyData, setCopyData] = useState(copyBooks)



    function handleSearch  (query){
      if(query ==='' ){
        initBooks()
      }else{
        const temp = [...data]
        let res = []
        temp.forEach(item =>{
          if(item.title.toLowerCase().indexOf(query)>-1){
              res.push(item)
          }
        })
        setCopyData([...res])
      }
    }

    
  function initBooks (){
    setCopyData([...data])
  }

  useEffect(()=>{
    initBooks()
  },[])
  function onAdd(item){
    console.log(item)
    let temp = [...data]
    const id = temp[temp.length - 1].id ++
    item['id'] = id
    temp.push(item)
    setData([...temp])
    initBooks()
  }

  return (
    <>
      <Menu title="Feriel Libro" onadd={onAdd} onsearch={handleSearch}/>
      <List items ={copyData}/>
    </>
  );
}

export default App;
