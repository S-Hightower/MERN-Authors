import React from "react";
import { useHistory } from "react-router-dom";

const EditButton = props => {
    const history = useHistory();
    const {id} = props;

    const updatePage = () => {
        history.push(`/api/authors/${id}/edit`);
    }

    return(
        <button className="btn btn-outline-primary btn-sm" onClick={updatePage}>Edit</button>
    )
};

export default EditButton;

//this would be more effective as a link disguised as a button