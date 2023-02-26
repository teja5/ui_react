import { Component } from "react";
import DealerItem from "./DealerItem";

const DEALERS_LIST = [
    { id: '1', name: 'one', phone: '1234', address: 'oneaddress' },
    { id: '2', name: 'two', phone: '2341', address: 'twoaddress' },
    { id: '3', name: 'three', phone: '4321', address: 'threeaddress' }
];

const dealerList = (
    <ul>
        {DEALERS_LIST.map((dealer) => (
            <DealerItem key={dealer.id} name={dealer.name} />
        ))}
    </ul>
);

class DealerList extends Component {
    constructor() {
        super();
        this.state = { dealersList: DEALERS_LIST };
    }


    render() {
        return (
            <div>
                <h1>This is DealerList {DEALERS_LIST.length}</h1>
                {dealerList}
            </div>
        )
    }
}
export default DealerList;