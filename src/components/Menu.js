import React, {useState} from 'react'
import Search from './Search'
import PanelAdd from './PanelAdd'
import '../css/Menu.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars,faTimes} from '@fortawesome/free-solid-svg-icons'



const Menu = (props)=> {  
    
    const [panel,setPanel] = useState(false)
    const [clicked,setClicked] = useState(false)
    
    function Add(){
        setPanel(!panel)
    }
    const handleClick =()=>{
        setClicked(!clicked)
    }
    return(
<div className="containerr">

    <div className={clicked?"subcontainer_active":"subcontainer"}>
    <div className="logo">
            <img src="/img/logo.png" width="25%"/>
            {props.title}
        </div>

        <div className="search">
            <Search onsearch={props.onsearch}/>
        </div>

        <div className="actions">
            <button onClick={Add} className="button btn-blue">+ Agregar Anime</button>
        </div>
            
    </div>
    <div className="menu-icon" onClick={handleClick}>
                <FontAwesomeIcon icon={clicked ? faTimes:faBars}/>
            </div>
    {
        panel?
        <PanelAdd oncancel = {Add} onadd={props.onadd}/>
        :
        ''
    }
</div>

)
}
export default Menu