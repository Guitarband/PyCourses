import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error captured:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
              <>
                  <h1>Oops!</h1>
                  <h3>Something went wrong loading while loading this page</h3>
                  <p>If this issue persists, <a href={'/contact'}>please let us know here</a></p>
                  <p>Otherwise, <a href={'/'}>return home here</a></p>
              </>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;