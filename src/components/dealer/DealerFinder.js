import { Component, Fragment } from "react";
import DealerList from "./DealerList";

const DUMMY_DEALERS = [
    { id: 1, name: 'one', phone: '2314', address: "one address" },
    { id: 2, name: 'two', phone: '4321', address: "two address" },
    { id: 3, name: 'three', phone: '1234', address: "three address" }
]
class DealerFinder extends Component {

    constructor() {
        super()
        this.state = {
            filteredDealers: DUMMY_DEALERS,
            searchDealers: ''
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchDealers !== this.state.searchDealers) {
            this.setState({
                filteredDealers: DUMMY_DEALERS.filter((dealer) =>
                    dealer.name.includes(this.state.searchDealers))
            })
        }
    }
    searchDealersHandler(event) {
        this.setState({ searchDealers: event.target.value });
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input type='search' onChange={this.searchDealersHandler.bind(this)} />
                </div>
                <DealerList dealers={this.state.filteredDealers} />
            </Fragment>
        )
    }
}
export default DealerFinder;