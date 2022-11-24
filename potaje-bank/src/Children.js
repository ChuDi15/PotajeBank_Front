import React from 'react'
import Logging from './Components/Access/Logging/Logging'
import Register from './Components/Access/Register/Register'


function Children(props) {


    return (
        <div>
            <Register LoggedHandler={props.LoggedHandler}></Register>
            <Logging></Logging>
        </div >
    )
}

export default Children