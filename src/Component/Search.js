import React, { useState, useEffect } from 'react'

const Search = ( props ) => {

const [searchText, setSearchText] = useState("")

const handleChange = ( event ) => {
    setSearchText(event.target.value);
}

useEffect(() => {
props.onSearch(searchText);
}, [searchText])




  return (
    <div style={{textAlign: "center"}}>
    <input type="text" placeholder='Search Country' value={searchText} onChange={handleChange}/>

    </div>
  )
}

export default Search