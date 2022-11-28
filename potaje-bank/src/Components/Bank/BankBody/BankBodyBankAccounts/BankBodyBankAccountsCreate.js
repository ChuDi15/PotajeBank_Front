import React, { useState } from 'react'

const BankBodyBankAccountsCreate = (props) => {

    const [name, setName] = useState("")
    const [id, setId] = useState("")

    const handleInputName = (event) => {
        setName(event.target.value)
    }
    const handleInputId = (event) => {
        setId(event.target.value)
    }


    const createAccount = () => {

        console.log(name)
        console.log(id)
    }



    return (
        <div className='p-3 d-flex flex-column align-items-center'>
            <h2 className='text-primary'>CREAR CUENTA</h2>
            <label>Nombre de la cuenta</label>
            <input onChange={handleInputName} className='m-2' type="text" />
            <label>ID BANCO</label>
            <input onChange={handleInputId} className='m-2' type="text" />
            <button className='w-25 mt-5' onClick={createAccount}>Enviar</button>
        </div>
    )
}

export default BankBodyBankAccountsCreate