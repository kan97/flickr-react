import React, { Component } from "react";
import './Search.css'

class Search extends Component {
    submitHandler = e => {
        e.preventDefault()
        this.props.callbackFromParent(this.refs.tag.value);
    }
    
    componentDidUpdate() {
        if (!this.props.pathname.includes('tag')) {
            this.refs.tag.value = ''
        } else {
            this.refs.tag.value = this.props.tag
        }
    }

    clickStartBtn = () => {
        this.refs.right.classList.remove("right-backward")
        this.refs.tag.classList.remove("input-backward")
        this.refs.temp.classList.remove("temp-backward")
        this.refs.start.classList.remove("start-backward")
        this.refs.end.classList.remove("end-backward")
        this.refs.submit.classList.remove("submit-backward")
 
        this.refs.right.classList.toggle("right-forward")
        this.refs.tag.classList.toggle("input-forward")
        this.refs.temp.classList.toggle("temp-forward")
        this.refs.start.classList.toggle("start-forward")
        this.refs.end.classList.toggle("end-forward")
        this.refs.submit.classList.toggle("submit-forward")
    }

    clickEndBtn = () => {
        this.refs.right.classList.remove("right-forward")
        this.refs.tag.classList.remove("input-forward")
        this.refs.temp.classList.remove("temp-forward")
        this.refs.start.classList.remove("start-forward")
        this.refs.end.classList.remove("end-forward")
        this.refs.submit.classList.remove("submit-forward")

        this.refs.right.classList.toggle("right-backward")
        this.refs.tag.classList.toggle("input-backward")
        this.refs.temp.classList.toggle("temp-backward")
        this.refs.start.classList.toggle("start-backward")
        this.refs.end.classList.toggle("end-backward")
        this.refs.submit.classList.toggle("submit-backward")
    }

    render() {
        return (
            <div ref="right" className="right">
                <form onSubmit={this.submitHandler}>
                    <input 
                        title="Enter a search here" 
                        ref="tag" type="text" 
                        className="input" 
                        placeholder="Search" 
                    />
                    <button ref="temp" type="button" className="temp"></button>
                    <button ref="start" type="button" className="start" onClick={this.clickStartBtn}></button>
                    <button title="Close" ref="end" type="button" className="end" onClick={this.clickEndBtn}>
                        <i className="fas fa-times"></i>
                    </button>
                    <button title="Search" ref="submit" type="submit" className="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        );
    }
}

export default Search;
