import React, { Component } from 'react';
import "./ErrorBoundary.scss"

class ErrorBoundary extends Component {
    state = {hasError: false};

    static getDerivedStateFromError(error) {
        console.log(error);
        return {hasError: true};
    }

    render() {
        if (this.state.hasError) {
            return <h1 className='error-boundary'>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;