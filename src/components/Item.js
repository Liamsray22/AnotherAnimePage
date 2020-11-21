import React, {useState, useEffect} from 'react'
import '../css/Item.css';


const Item = (props)=>   {
    
    const [star, setStar] = useState([])


    useEffect(()=>{
        setStar(Array(parseInt(props.rating)).fill(0))
    },[])
    
    return(
<div className="item">
    <div className="image">
        <img src={'img/'+ props.image} width="100%"/>
    </div>
    <div className="title">
        {props.title}
    </div>
    <div className="rating">
        <p>
            {
                star.map(x=>
                    <img src="img/star.png" width="32"/>
                )
            }
        </p>
        Calificacion
        <select value={props.rating}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>
    <div className="actions">
        <button>Eliminar</button>
    </div>
</div>

)
    }
export default Item