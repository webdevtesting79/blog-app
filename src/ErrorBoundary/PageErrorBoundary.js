import React, { Component } from "react";
class PageErrorBoundary extends Component {
    state = {
        isCrashed: false
    }

    static getDerievedStateFromError(error) {
        return {
            isCrashed: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }
    
    render() {
        if (this.state.isCrashed) {
            return <h1>Something went wrong....</h1>
        }
        return this.props.children;
    }
}
export default PageErrorBoundary;