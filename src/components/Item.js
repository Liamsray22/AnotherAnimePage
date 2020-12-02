import React, {useState, useEffect} from 'react'
import '../css/Item.css';


const Item = (props)=>   {
    
    const [star, setStar] = useState([])
    const [rating, setRating] = useState(1)
    const [title, setTitle] = useState('')
    const [id, setId] = useState(1)
    const [image, setImage] = useState('')


    useEffect(()=>{
        setRating(parseInt(props.rating))
        setTitle(props.title)
        setImage(props.image)
        setId(props.id)
        setStar(Array(parseInt(props.rating)).fill(0))
    },[])

    function handleChangeRating(e){
        const rating  = parseInt(e.target.value)
        setRating(e.target.value)
        setStar(Array(parseInt(rating)).fill(0))
        props.onupdateRating({id:id,title:title,image:image,rating:rating})
    }

    function handleRemove(e){
        props.handleRemove(props.id)
    }
    
    return(
<div className="item">
    <div className="image">
        <img src={image} width="100%"/>
    </div>
    <div className="title">
        {title}
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
        <select value={rating} onChange={handleChangeRating}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>
    
    <button type="button" class="btn btn-danger" data-toggle="modal" data-target={"#exampleModal"+ id}>
  Eliminar
</button>

<div class="modal fade" id={"exampleModal" + id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Eliminar {title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Esta Seguro que desea eliminar el anime {title} ?
      </div>
      <div class="modal-footer">
        <div className="actions">
        <button onClick={handleRemove}>Eliminar</button>
    </div>      
    </div>
    </div>
  </div>
</div>
</div>

)
    }
export default Item