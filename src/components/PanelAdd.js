import React, {useState}from 'react'

const PanelAdd = (props)=>
{

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [rating, setRating] = useState(1)

     function onsubmit(e){
        e.preventDefault()
        props.onadd({title:title,image:image,rating:rating })
        props.oncancel()
    }

    function onchangeTitle(e){
        setTitle(e.target.value)
    }
    function onchangeImage(e){
        setImage(e.target.value)
    }
    function onchangeRating(e){
        const ratingu = parseInt(e.target.value)
        setRating(ratingu)
    }
return (

<div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={onsubmit}>
                        <p>
                        <label>Título del libro</label><br />
                        <input onChange={onchangeTitle} type="text" name="title" className="input" />
                        </p>

                        <p>
                        <label>Nombre de imagen</label><br />
                        <input onChange={onchangeImage} type="text" name="image" className="input"/>
                        </p>

                        <p>
                        <label>Calificación</label><br />
                        <select onChange={onchangeRating}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </p>
                        <input type="submit" className="button btn-blue" value="Registrar libro" />
                    </form>
                    <button onClick={props.oncancel} className="button btn-normal">Cancelar</button>

                </div>
            </div>
)
}
export default PanelAdd