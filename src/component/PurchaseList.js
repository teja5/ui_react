import React from "react";
import { useHistory } from "react-router-dom";
const PurchaseList = () => {

    const history = useHistory();

    const onButtonCLick = () => {
        history.goBack();
    }

    return (
        <div>
            <h1>Purchase List</h1>
            <button onClick={onButtonCLick}> Back </button>
        </div>
    )
}
export default PurchaseList;