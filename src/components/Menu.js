import React from 'react'
import Search from './Search'
import '../css/Menu.css';


const Menu = (props)=>   (
<div className="container">
    <div className="subcontainer">
        <div className="logo">
            {props.title}
        </div>

        <div className="search">
            <Search/>
        </div>

        <div className="actions">
            <button className="button btn-blue">+ Add</button>
        </div>
    </div>
</div>

)

export default Menu