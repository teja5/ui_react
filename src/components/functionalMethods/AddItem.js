import { useState } from "react";

const AddItem = () => {

    const [name, setName] = useState('');
    const [units, setUnits] = useState('');


    var requetJson = {
        "item_id": 0,
        "name": name,
        "units": units
    }

    async function addItem() {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify(requetJson)

        }
        const response = await fetch('http://184.72.6.13:8080/purchaseapp/addItem', requestOptions);
        if (response.ok) {
            const data = await response.json();

            setName('');
            setUnits('');
        } else {
            console.log('Something went wrong')
        }
    }

    const handelKeyPress = e => {
        if (e.keyCode === 13) {
            // addVillage();
        }
    }

    const onSubmitForm = event => {
        event.preventDefault();
        addItem();
        console.log(name);
    }

    const onNameChangeListner = event => {
        setName(event.target.value);
    }

    const onUnitsChangeListner = event => {
        setUnits(event.target.value);
    }

    return (
        <div>
            <form onSubmit={onSubmitForm} >
                <h1>Add Item </h1>
                <p>Enter Name:</p>
                <p>{name}</p>
                <input
                    onChange={onNameChangeListner}
                    type='text'
                    name='username'
                    value={name}
                />
                <br />
                <br />
                <p>Enter Units:</p>
                <p>{units}</p>
                <input
                    onChange={onUnitsChangeListner}
                    type='text'
                    name='units'
                    value={units}
                />
                <br />
                <br />

                <button type='submit'
                    onKeyPress={handelKeyPress}
                > Submit</button>
            </form>
        </div >
    )
}
export default AddItem;