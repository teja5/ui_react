import React from "react";
import { useParams } from "react-router-dom";
const EditDealer = () => {

    const params = useParams();
    console.log((params.dealerId))
    return (
        <div>
            <h1>Edit Dealer + {params.dealerId}</h1>
            <p>{params.dealerId}</p>
            <button>Back</button>
        </div>
    )
}
export default EditDealer;