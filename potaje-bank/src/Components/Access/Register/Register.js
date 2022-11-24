import React from 'react'


function Register(props) {

    const setLogging = () => {
        if (props.logging) {
            props.setLogging(false);
        } else {
            props.setLogging(true);
        }
    }
    return (
        <div className='d-flex  align-content-center justify-content-center mt-5'>
            <div className="inputDiv m-5 p-2 d-flex w-25 flex-column align-content-center justify-content-center">
                <h1 className='text-primary text-center'>Real Worlds App</h1>
                <h2 className='text-center'>Sign up</h2>
                <label>First name</label>
                <input type="text"></input>
                <label>Last name</label>
                <input type="text"></input>
                <label>Username</label>
                <input type="text"></input>
                <label>Password</label>
                <input type="password"></input>
                <label>Confirm Password</label>
                <input type="password"></input>
                <button onClick={props.signedHandler} className='mt-4 btn btn-primary'>SIGN UP</button>
                <div className='m-3 p-3 d-flex flex-column justify-content-center align-content-center'>
                    <label className='text-center'>Already have an account?</label>
                    <button onClick={setLogging} className='w-50 btn btn-primary m-auto'> SIGN IN</button>
                </div>
            </div>
        </div>
    )
}

export default Register