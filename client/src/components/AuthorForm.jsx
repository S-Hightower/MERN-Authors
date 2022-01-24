//example of how to set link to look like button

import React, { useState } from "react";
import { Link } from "react-router-dom";

import CancelButton from './CancelButton';

const AuthorForm = (props) => {
    
    const {handleSubmit, initName} = props;
    const [name, setName] = useState(initName);

    return (
        <div className="container-sm mt-3 mb-5">
            <h1>🖋Favorite Authors📚</h1>
            <div>
                <Link
                className="btn btn btn-success btn-sm"
                role="button"
                to={'/'}>
                    Home
                </Link>
            </div>
        <form onSubmit={e => {handleSubmit(e, {name})}}>
            <label>Author Name:</label>
            <input type="text" className="form-control" onChange = {e => {setName(e.target.value)}} value={name}/>
            <div className="mt-2">
            <CancelButton />
            <input type='submit' value='Submit'/>
            </div>
        </form>
        </div>
    )
};

export default AuthorForm;