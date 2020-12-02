import React,{useState,useEffect} from 'react'
import './css/App.css';
import Menu from './components/Menu'
import List from './components/List'
import {copyBooks,Books} from './Data/books'


function App() {
  const [data, setData] = useState(Books)
  const [copyData, setCopyData] = useState(copyBooks)
 
   const initBooks = ()=>{
   setCopyData([...data])
  }

  useEffect(()=>{
    initBooks()
  },[])

  const onAdd= (item)=>{
    console.log(item)
    let temp = [...data]
    const id = temp[temp.length - 1].id + 1
    item['id'] = id
    temp.push(item)
    setData([...temp])
    setCopyData([...temp])
  }


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


  const handleUpdateRating = (item)=>{
    let temp = [...data]
    const i = temp.findIndex(x=>x.id === item.id)
    temp[i].title = item.title
    temp[i].image = item.image
    temp[i].rating = item.rating

    setData([...temp])
    setCopyData([...temp])
  }

  const onRemove = (id)=>{
    let temp = [...data]
    const res = temp.filter(item=> item.id != id)
    setData([...res])
    initBooks()
 
  }

  return (
    
    <>
      <Menu title="Another Anime Page" onadd={onAdd} onsearch={handleSearch}/>
      <List items ={copyData} onupdateRating={handleUpdateRating} handleRemove={onRemove}/>
    </>
  );
}

export default App;
