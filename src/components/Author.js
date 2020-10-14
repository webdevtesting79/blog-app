import React from "react";
import { useParams } from "react-router-dom";
import useFetchAuthorById from "../hooks/useFetchAuthorById";

const Author = () => {

    const { authorId } = useParams();
    const author = useFetchAuthorById(authorId);

    return (
        <div>
            <p>{author.name}</p>
            <p>{author.email}</p>
            <p>{author.username}</p>
        </div>
    )
}
export default Author;