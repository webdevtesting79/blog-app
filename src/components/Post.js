import React, { useEffect, useState } from "react";

const Post = (props) => {
    const { authorId } = props;
    const [author, setAuthor] = useState({});

    //undefined.foo();

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/users/" + authorId)
            .then((res) => res.json())
            .then((data) => setAuthor(data))
            .catch(console.error);
    }, [authorId]);

    return (
        <div className="container">
            <h3>{props.title}</h3>
            <p>Author: {author.name}</p>
            <p>{props.body}</p>
        </div>
    );
}
export default Post;