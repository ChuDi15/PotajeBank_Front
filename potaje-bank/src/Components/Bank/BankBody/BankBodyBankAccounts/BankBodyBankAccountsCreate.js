import React, { useState } from 'react'

const BankBodyBankAccountsCreate = (props) => {



    const handleInputName = (event) => {
        // props.handleNewAccount(previus => { return { ...previus, name: event.target.value } })
        console.log(event.target.value)
    }
    const handleInputId = (event) => {
        props.handleNewAccount(previus => { return { ...previus, id: event.target.value } })
        console.log(event.target.value)
    }


    const createAccount = () => {

    }



    return (
        <div className='p-3 d-flex flex-column align-items-center'>
            <h2 className='text-primary'>CREATE ACCOUNT</h2>
            <label>Account name</label>
            <input onChange={handleInputName} className='m-2' type="text" />
            <label>Bank ID</label>
            <input onChange={handleInputId} className='m-2' type="text" />
            <button className='w-25 mt-5' onClick={createAccount}>Enviar</button>
        </div>
    )
}

export default BankBodyBankAccountsCreate