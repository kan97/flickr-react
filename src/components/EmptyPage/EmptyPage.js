import React, { Component } from 'react';
import { withRouter } from 'react-router'

class EmptyPage extends Component {
    componentDidMount() {
        if (this.props.location.pathname.includes('create')) {
            document.title = 'Create | Flickr'
        } else {
            document.title = 'Get Pro | Flickr'
        }
    }

    render() {
        return (
            <div className="container">
                <div className="alert alert-warning">
                    <strong>Empty Page</strong>
                </div>
            </div>
        );
    }
}

export default withRouter(EmptyPage);
