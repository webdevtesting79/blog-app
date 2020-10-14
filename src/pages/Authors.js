import React, { useEffect, useState } from "react";
import { Link, Switch, useRouteMatch, Route } from "react-router-dom";
import Author from "../components/Author";


const Authors = () => {
    const [authors, setAuthors] = useState([]);
    const { url, path } = useRouteMatch();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setAuthors(data))
            .catch(console.error);
    }, [])

    return (
        <div className="container">
            <ol>
                {
                    authors.map((author, index) => {
                        return (
                            <li key={index}>
                                <Link to={url + "/" + author.id}>
                                    {author.name}
                                </Link>
                            </li>
                        );
                    })
                }
            </ol>
            <Switch>
                <Route path={path + "/:authorId"}>
                    <Author />
                </Route>
            </Switch>
        </div>
    )
}
export default Authors;