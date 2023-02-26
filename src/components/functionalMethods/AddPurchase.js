import { useEffect } from "react";
import { useState } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const AddPurchase = () => {

    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [item, setItem] = useState('');
    const [dealer, setDealer] = useState('');

    const [items, setItems] = useState([]);
    const [dealers, setDealers] = useState([]);

    var requetJson = {
        "purchase_id": 0,
        "price": price,
        "date": date,
        "item": { "item_id": item.item_id, "name": item.name, "units": item.units },
        "dealer": { "address": dealer.address, "phone": dealer.phone, "name": dealer.name, "dealer_id": dealer.dealer_id }
    }

    // useEffect(() => {
    //     getItems()
    //     getDealers()
    // })
    async function getItems() {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        const response = await fetch('http://184.72.6.13:8080/purchaseapp/listItem?firstResult=0&max=50', requestOptions);

        if (response.status === 500) {

            // getVillages()
            console.log("List Not Retrieved");

        } else {
            const data = await response.json();

            setItems(data.itemList)

        }

    }

    async function getDealers() {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        const response = await fetch('http://184.72.6.13:8080/purchaseapp/listDealer?firstResult=0&max=5', requestOptions);

        if (response.status === 500) {

            // getVillages()
            console.log("List Not Retrieved");

        } else {
            const data = await response.json();

            setDealers(data.dealerList)
        }
    }



    async function addPurchase() {

        console.log(requetJson)
        console.log(JSON.stringify(requetJson))

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify(requetJson)

        }
        const response = await fetch('http://184.72.6.13:8080/purchaseapp/addPurchase', requestOptions);
        if (response.ok) {
            const data = await response.json();

            setPrice('');
            setDate('');
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
        addPurchase()
        console.log(price);
    }

    const onPriceChangeListner = event => {
        setPrice(event.target.value);
    }

    const onDateChangeListner = event => {
        setDate(event.target.value);
    }

    const handleItemOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
        // setVillage
    }

    const handleItemOnSelect = (item) => {
        // the item selected
        console.log(item)
        let selectedItem = { item_id: item.item_id, name: item.name, units: item.units }
        setItem(selectedItem)
        // console.log(villageItem)
        // console.log(villageItem.village_id + " " + villageItem.name)
    }

    const formatItemResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>id: {item.item_id}</span>
                <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
            </>
        )
    }


    const handleDealerOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
        // setVillage
    }

    const handleDealerOnSelect = (item) => {
        // the item selected
        console.log(item)
        let selectedItem = { dealer_id: item.dealer_id, name: item.name, phone: item.phone, address: item.address }
        setDealer(selectedItem)
        // console.log(villageItem)
        // console.log(villageItem.village_id + " " + villageItem.name)
    }

    const formatDealerResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>id: {item.dealer_id}</span>
                <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
            </>
        )
    }





    const onDealerChangeListner = event => {
        setDealer(event.target.value);
        console.log(dealer)
    }

    const getDealersFun = () => {
        getDealers();
    }

    const getItemsFun = () => {
        getItems();
    }


    return (
        <div>

            <button onClick={getDealersFun}>Get Villages</button>
            <button onClick={getItemsFun}>Get Items</button>

            <form onSubmit={onSubmitForm} >
                <h1>Add Purchase</h1>
                <p>Enter price:</p>
                <p>{price}</p>
                <input
                    onChange={onPriceChangeListner}
                    type='text'
                    name='price'
                    value={price}
                />
                <br />
                <br />
                <p>Enter Date:</p>
                <p>{date}</p>
                <input
                    onChange={onDateChangeListner}
                    type='text'
                    name='date'
                    value={date}
                />
                <br />
                <br />
                <p>Select Item:</p>
                {/* <select value={item} onChange={onItemChangeListner}>
                    {items.map((item) => (
                        <option key={item.item_id} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
                <br></br> */}
                <div style={{ width: 400 }}>
                    <ReactSearchAutocomplete
                        items={items}
                        onSearch={handleItemOnSearch}
                        onSelect={handleItemOnSelect}
                        autoFocus
                        formatResult={formatItemResult}
                    />
                </div>
                <br></br>
                <p>Select Dealer:</p>
                <div style={{ width: 400 }}>
                    <ReactSearchAutocomplete
                        items={dealers}
                        onSearch={handleDealerOnSearch}
                        onSelect={handleDealerOnSelect}
                        autoFocus
                        formatResult={formatDealerResult}
                    />
                </div>
                <br></br>
                <br></br>

                <button type='submit'
                    onKeyPress={handelKeyPress}
                > Submit</button>
            </form>
        </div >
    )
}
export default AddPurchase;