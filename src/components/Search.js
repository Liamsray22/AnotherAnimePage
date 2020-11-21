import React from 'react'

const Search = (props)=>   {
    
    function handleChange(e){
        const query  =e.target.value.toString().toLowerCase()
        props.onsearch(query)
    }
    
    return(
<div>
    <input type="text" onChange={handleChange}/>
</div>

)
    }
export default Search