import { useEffect, useState } from "react";

const useFetchPostById = (id) => {
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/posts/" + id)
            .then((res) => res.json())
            .then((data) => setPost(data))
            .catch(console.error);
    }, [id]);

    return post;
}

export default useFetchPostById;