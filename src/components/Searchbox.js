import React from 'react'

const Searchbox = (props) => {
  return (
    <div className='col col -sm-4'>
        <input className='form-control' 
        value={props.value} 
        onChange={(event)=>props.setsearchvalue(event.target.value)}
        placeholder='Type to search...' />
    </div>
  )
}

export default Searchbox