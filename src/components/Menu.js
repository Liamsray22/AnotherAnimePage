import React, {useState} from 'react'
import Search from './Search'
import PanelAdd from './PanelAdd'
import '../css/Menu.css';


const Menu = (props)=> {  
    
    const [panel,setPanel] = useState(false)
    
    function Add(){
        setPanel(!panel)
    }
    return(
<div className="container">
    <div className="subcontainer">
        <div className="logo">
            {props.title}
        </div>

        <div className="search">
            <Search/>
        </div>

        <div className="actions">
            <button onClick={Add} className="button btn-blue">+ Add</button>
        </div>
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