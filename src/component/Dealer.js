import React, { Component }  from 'react';

import { useState } from "react";

const Dealer = () => {

    const onSubmitDealer = event => {

        console.log(name + " " + phoneNo + " " + address);
    }

    const [name, setName] = useState('');
    const [phoneNo, setphoneNo] = useState('');
    const [address, setAddress] = useState('');

    const onNameChangeListner = event => {
        setName(event.target.value);
    }

    const onPhoneChangeListner = event => {
        setphoneNo(event.target.value);
    }

    const onAddressChangeListner = event => {
        setAddress(event.target.value);
    }
    return (
        <div>
            <h1>
                Dealer
            </h1>
            <br></br>


            <form onSubmit={onSubmitDealer}>

                <p>Enter Name:</p>
                <input
                    onChange={onNameChangeListner}
                    type='text'
                    name='name'
                />

                <p>Enter Phone:</p>
                <input
                    onChange={onPhoneChangeListner}
                    type='tel'
                    name='phone'
                />

                <p>Enter Address:</p>
                <input
                    onChange={onAddressChangeListner}
                    type='text'
                    name='address'
                />

                <br></br>
                <br></br>

                <button type='submit'>Add Dealer</button>

            </form>

        </div>
    );
}
export default Dealer;