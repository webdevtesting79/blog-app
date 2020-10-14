import React from 'react';
import { Switch, Route } from "react-router-dom";
import routes from './routes';
import Header from "./components/Header";
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import PostPage from "./pages/PostPage";
import PageErrorBoundary from "../src/ErrorBoundary/PageErrorBoundary";

function App() {

  return (
    <>
      <Header />

      <Switch>
        <Route path={routes.post}>
          <PostPage />
        </Route>
        <Route path={routes.posts}>
          <Home />
        </Route>
        <Route path={routes.authors}>
          <Authors />
        </Route>
        <Route path={routes.addPost}>
          <h1>Add Post!</h1>
        </Route>
        <Route path={routes.home}>
          <PageErrorBoundary>
            <Home />
          </PageErrorBoundary>
        </Route>
      </Switch>
    </>
  );
}

export default App;
/*
<Route exact={true} path={routes.authors}>
  <h1>Authors!</h1>
</Route>
*/