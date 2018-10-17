import React, { Component } from "react";
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tag: ''
        }
    }

    handleInput = e => {
        const {target} = e
        this.setState({
            tag: target.value
        })
    }  

    submitHandler = e => {
        e.preventDefault()
        this.props.history.push(`/tag/${this.state.tag}`)
    }

    // fill in tag search
    static getDerivedStateFromProps(nextProps, prevState) {
        // move from tag search to another
        if (!nextProps.location.pathname.includes("tag") && nextProps.tag_search === prevState.tag) {
            return {tag: ''}
        }
        // move from tag in photo detail to tag search 
        if (nextProps.location.pathname.includes("tag") && nextProps.tag_search !== prevState.tag) {
            return {tag: nextProps.tag_search}
        }
        return null
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.submitHandler}>
                <input 
                    className="form-control mr-sm-2" 
                    type="text" 
                    placeholder="Search" 
                    value={this.state.tag}
                    onChange={this.handleInput}
                />
                <button className="btn btn-primary" type="submit">Search</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    tag_search: state.tags.tag
})

export default withRouter(connect(mapStateToProps, null)(Search));
