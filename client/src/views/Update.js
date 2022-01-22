import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useHistory} from 'react-router-dom';

import AuthorForm from "../components/AuthorForm";

const Update = props => {
    const {id} = useParams();
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthor(res.data)
                setLoaded(true)
            })
            .catch(error => console.log(error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/${id}/edit`, {author})
            .then(res => console.log(res))
            .catch(error => {
                const errorResponse = error.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
        history.push('/');
    }

    return(
        <div>
            {errors.map((error, index) => <p key={index}>{error}</p>)}
            {loaded && <AuthorForm handleSubmit={handleSubmit} initName={author.name} />}
        </div>
    )
};

export default Update;