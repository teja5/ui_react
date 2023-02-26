import React from "react";
import { useHistory } from "react-router";

class Dealer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "", phone: "", address: "" };
    }


    onNameChangeListner = event => {

        // this.setState((oldState) => {
        //     return { name: oldState };
        // });
        // setName(event.target.value);
        this.setState((oldState) => {
            return { name: oldState.name + event.target.value, phone: this.phone, address: this.address }
        })
        // this.setState({ name: event.target.value, phone: this.phone, address: this.address })
        // console.log(event.target.value)
    }

    onPhoneChangeListner = event => {
        this.setState({ name: this.name, phone: event.target.value, address: this.address })
        // setphone(event.target.value);
    }

    onAddressChangeListner = event => {
        this.setState({ name: this.name, phone: this.phone, address: event.target.value })
        // setaddress(event.target.value)
    }

    onSubmitForm() {
        console.log(this.state.name)
        // useHistory.goBack()
        // this.addDealer()
        // console.log('called')
    }


    async addDealer() {

        console.log("--->" + this.state.name)

        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },

        //     // body: JSON.stringify(requetJson)
        //     body: JSON.stringify({
        //         dealer_id: 0,
        //         name: this.state.name,
        //         phone: this.state.phone,
        //         address: this.state.address
        //     })
        // }
        // const response = await fetch('http://184.72.6.13:8080/purchaseapp/addDealer', requestOptions);
        // if (response.ok) {
        //     const data = await response.json();
        //     console.log(data)
        // } else {
        //     console.log('Something went wrong')
        // }
    }


    render() {
        return (
            <div>
                <h1>This is Dealer</h1>

                <button onClick={this.addDealer}> Add Dealer</button>

                <form onSubmit={this.onSubmitForm}>
                    <h1>Add Dealer</h1>
                    <p>Name:</p>
                    <input
                        onChange={this.onNameChangeListner.bind(this)}
                        type='text'
                        name='name'
                        value={this.state.name}
                    />

                    <br></br>
                    <p>Phone:</p>
                    <input
                        onChange={this.onPhoneChangeListner}
                        value={this.state.phone}
                        type='number'
                        name='phone'
                    />
                    <br></br>
                    <p>Address:</p>
                    <input
                        onChange={this.onAddressChangeListner}
                        value={this.state.address}
                        type='text'
                        name='address'
                    />
                    <br></br>

                    <br />
                    <button type='submit' > Add Dealer</button>
                </form>
            </div>)
    }
}
export default Dealer;