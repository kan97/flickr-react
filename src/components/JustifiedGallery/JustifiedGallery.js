// node_modules
import React, { Component } from "react";
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux'

// components
import Spinner from './../Spinner/Spinner'
import PhotoItem from './../PhotoItem/PhotoItem'

// stylesheets
import './../../stylesheets/HoverEffect/Julia.css'
import './JustifiedGallery.css'

import { actFetchPhotosRequest, actResetPhotos } from './../../actions'

class JustifiedGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: true
    };
  }

  loadItems = async () => {
    if (this.props.nextPage > 25) {
      this.setState({
        hasMore: false
      })
      return
    }
    this.props.fetchPhotos(this.props.nextPage, this.props.tag)
  }
  
  componentDidMount() {
    if (this.props.tag !== this.props.tag_search) {
      this.props.resetPhotos(this.props.tag)
    }
  }
  
  componentDidUpdate() {
    if (this.props.tag !== this.props.tag_search) {
      this.props.resetPhotos(this.props.tag)
    }
  }

  render() {
    const loader = <Spinner />

    return (    
      <InfiniteScroll
        pageStart={this.props.nextPage - 1}
        loadMore={() => this.loadItems()}
        hasMore={this.state.hasMore}
        loader={loader}
      >
        <div className="tracks">
          <PhotoItem images={this.props.images} />
        </div>
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = state => ({
  nextPage: state.photos.nextPage,
  images: state.photos.images,
  tag_search: state.photos.tag
})

const mapDispatchToProps = dispatch => ({
  fetchPhotos: (nextPage, tag) => dispatch(actFetchPhotosRequest(nextPage, tag)),
  resetPhotos: tag => dispatch(actResetPhotos(tag))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JustifiedGallery)