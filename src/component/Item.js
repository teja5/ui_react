import React, { Component }  from 'react';

import { useState } from "react";

const Item = () => {


    const onSubmitItem = event => {
        console.log(name + " " + unit);
    }

    const [name, setName] = useState('');
    const [unit, setUnit] = useState('');

    const onNameChangeListner = event => {
        setName(event.target.value);
    }

    const onUnitChangeListner = event => {
        setUnit(event.target.value);
    }

    return (
        <div>
            <h1>
                Item
            </h1>
            <form onSubmit={onSubmitItem}>

                <p>Enter Name:</p>
                <input
                    onChange={onNameChangeListner}
                    type='text'
                    name='name'
                />

                <p>Enter Unit:</p>
                <input
                    onChange={onUnitChangeListner}
                    type='text'
                    name='phone'
                />

                <br></br>
                <br></br>

                <button type='submit'>Add Item</button>

            </form>
        </div>
    )
}
export default Item;