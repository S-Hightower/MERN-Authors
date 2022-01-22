import React from "react";
import { useHistory } from "react-router-dom";

const CancelButton = props => {
    const history = useHistory();

    const onCxl = e => {
        history.push('/');
    }

    return(
        <button onClick={onCxl}>Cancel</button>
    )
};

export default CancelButton;