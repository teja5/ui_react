import { useState } from "react";

const AddDealer = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');


    var requetJson = {
        "dealer_id": 0,
        "name": name,
        "phone": phone,
        "address": address
    }



    // const villages = useSelector(state => state.village.village);

    // /    const dispatch = useDispatch();

    async function addDealer() {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify(requetJson)
            // body: JSON.stringify({
            //     village_id: 0,
            //     name: name
            // })
        }
        const response = await fetch('http://184.72.6.13:8080/purchaseapp/addDealer', requestOptions);
        if (response.ok) {
            const data = await response.json();
            // console.log(JSON.parse(data.village).village_id + " " + JSON.parse(data.village).name)
            // await (data) => {
            // setName(JSON.parse(data.village).village_id + " " + JSON.parse(data.village).name + "  " + data.status)
            // };    
            // dispatch(villageActions.addVillage(name))
            setName('');
            setAddress('');
            setPhone('');
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
        addDealer();
        console.log(name);
        // dispatch(villageActions.addVillage(name))
        // setName('')
    }

    const onNameChangeListner = event => {
        setName(event.target.value);
    }

    const onPhoneChangeListner = event => {
        setPhone(event.target.value);
    }

    const onAddressChangeListner = event => {
        setAddress(event.target.value);
    }

    // const onSelectionChangeListner = event => {
    //     setSelection(event.target.value);
    // }

    return (
        <div>
            <form onSubmit={onSubmitForm} >
                <h1>Add Dealer </h1>
                <p>Enter Name:</p>
                <p>{name}</p>
                <input
                    onChange={onNameChangeListner}
                    type='text'
                    name='username'
                    value={name}
                    // onKeyPress={handelKeyPress}
                />
                <br />
                <br />
                <p>Enter Phone:</p>
                <p>{phone}</p>
                <input
                    onChange={onPhoneChangeListner}
                    type='text'
                    name='phone'
                    value={phone}
                    // onKeyPress={handelKeyPress}
                />
                <br />
                <br />
                <p>Enter Address:</p>
                <p>{address}</p>
                <input
                    onChange={onAddressChangeListner}
                    type='text'
                    name='address'
                    value={address}
                    // onKeyPress={handelKeyPress}
                />
                <br />
                <br />

                <button type='submit' > Submit</button>
            </form>
        </div>
    )
}
export default AddDealer;