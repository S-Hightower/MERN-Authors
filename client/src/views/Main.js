import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AuthorDisplay from '../components/AuthorDisplay';

const Main = (props) => {

    const {id} = useParams();
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, [id]);

    const removeFromDom = id => {
        setAuthors(authors.filter(authors => authors._id != id));
    }

    return(
        <div>
            {loaded && <AuthorDisplay authors = {authors} removeFromDom={removeFromDom} />}
        </div>
    )
};

export default Main;