import React from 'react'

const DisplayScreen = ({displayValue}) =>{

    return(
        <div className='display-screen'>
            <input type='text' readOnly value={displayValue}></input>
        </div>
    )
}

export default DisplayScreen