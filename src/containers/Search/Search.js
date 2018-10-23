import React, { Component } from "react";
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import PreSearch from './../../components/Search/Search'

class Search extends Component {
    myCallback = (dataFromChild) => {
        this.props.history.push(`/tag/${dataFromChild}`)
    }

    render() {
        return (
            <PreSearch 
                callbackFromParent={this.myCallback} 
                pathname={this.props.location.pathname}
                tag={this.props.tag}
            />
        );
    }
}

const mapStateToProps = state => ({
    tag: state.tags.tag
})

export default withRouter(connect(mapStateToProps, null)(Search));
