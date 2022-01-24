//renders author form for init author creation
//validation applied

import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import AuthorForm from "../components/AuthorForm";

const Create = (props) => {

    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const handleSubmit = (e, data) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/new', data)
            .then(res => {
                console.log(res)
                history.push('/')
            })
            .catch(error => {
                const errorResponse = error.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    };
// history push goes within dot then
// REMEMBER handlesubmit res
    return (
        <div>
            {errors.map((error, index) => <p key={index} className="text-danger">🚩{error}🚩</p>)}
            <AuthorForm handleSubmit={handleSubmit} initName='' />
        </div>
    )
};

export default Create;