import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AuthorDisplay = props => {

    const { removeFromDom } = props;

    const deleteAuthor = id => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {removeFromDom(id)})
            .catch(error => console.log(error));
    };

    return(
        <div className="container-sm mt-3 mb-5">
            <h1>🖋Favorite Authors📚</h1>
            <div>
                <Link to={'/api/new'}>
                    Click Here to Add an Author
                </Link>
            </div>
            <div>
                <h3>We have quotes by:</h3>
            </div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Authors & Available Actions</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                    {props.authors.map((author, index) => {
                        return (<td key={index} className="">
                            <Link to={`/api/authors/` + author._id}>
                                {author.name}
                            </Link>
                            <button onClick={e => {deleteAuthor(author._id)}} className="btn btn-outline-danger btn-sm">Delete</button>
                        </td>)
                    })}
                    </tr>
                </tbody>
            </table>
        </div>//container
    )


};

export default AuthorDisplay;