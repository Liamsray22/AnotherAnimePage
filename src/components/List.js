import React from 'react'
import '../css/List.css';
import Item from './Item'


const List = (props)=>   (
<div className="list">
    {props.items.map((item,index)=>{
        return(
            <Item key={item.id}
            id = {item.id}
            title = {item.title}
            rating = {item.rating}
            image = {item.image}
            />
        )
    })}
</div>

)

export default List