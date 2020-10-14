import { useEffect, useState } from "react";

const useFetchAuthorById = (authorId) => {
    const [author, setAuthor] = useState({})

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + authorId)
            .then((res) => res.json())
            .then((data) => setAuthor(data))
            .catch(console.error);
    }, [authorId]);

    return author;
}

export default useFetchAuthorById;