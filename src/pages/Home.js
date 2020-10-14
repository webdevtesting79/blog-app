import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import Post from "../components/Post";
import routes from "../routes";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch(console.error);
    }, []);

    return (
        <div className="container">
            <h1>Home</h1>
            {posts.map((post, index) => {

                const openPost = () => {
                    history.push(routes.post.replace(":id", post.id))
                }

                return (
                    <div>
                        <Post
                            key={index}
                            authorId={post.userId}
                            title={post.title}
                            body={post.body}
                        />
                        <Button onClick={openPost}>Read More...</Button>
                    </div>
                );
            })}
        </div>
    );
}
export default Home;