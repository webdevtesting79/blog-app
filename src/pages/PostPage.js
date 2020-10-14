import React from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";
import useFetchPostById from "../hooks/useFetchPostById";

const PostPage = () => {
    const { id } = useParams();

    const post = useFetchPostById(id);
    
    return (
        <div className="container">
            <Post
                title={post.title}
                body={post.body}
                authorId={post.userId}
            />
        </div>
    );
}
export default PostPage;