import React, { useState } from "react";
import { Link } from "react-router-dom";

import CancelButton from './CancelButton';

const AuthorForm = (props) => {
    
    const [name, setName] = useState(initName);
    const {handleSubmit, initName} = props;

    return (
        <div className="container-sm mt-3 mb-5">
            <h1>🖋Favorite Authors📚</h1>
            <div>
                <Link to={'/'}>
                    Home
                </Link>
            </div>
            <div>
                <h3>Add a new Author:</h3>
            </div>
        <form onSubmit={e => {handleSubmit(e, {name})}}>
            <label>Name:</label>
            <input type="text" onChange = {e => {setName(e.target.value)}} value={name}/>
            <CancelButton />
            <input type='submit' value='Submit'/>
        </form>
        </div>
    )
};

export default AuthorForm;