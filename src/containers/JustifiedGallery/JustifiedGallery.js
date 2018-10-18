// node_modules
import React, { Component } from "react";
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux'

// components
import Spinner from './../../components/Spinner/Spinner'
import PhotoItem from './../../components/PhotoItem/PhotoItem'

// stylesheets
import './../../stylesheets/HoverEffect/Julia.css'
import './JustifiedGallery.css'

import { 
  actFetchPhotosRequest, 
  actResetPhotos,
  actSetTag
} from './../../actions'

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
  
  // this function is used for refreshing infinite scroll when moving from one place to another
  componentDidMount() {
    const { tag } = this.props
    if (tag !== this.props.tag_search) {
      this.props.resetPhotos()
      this.props.setTag(tag)
    }

    if (tag === '') {
      document.title = 'Explore | Flickr'
    } else {
      document.title = `Search: ${tag} | Flickr`
    }
  }
  
  // 2 update function are used for refreshing infinite scroll when changing tag search
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.props.tag !== prevProps.tag) {
      return this.props.tag
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      this.props.resetPhotos()
      this.props.setTag(snapshot)
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
  tag_search: state.tags.tag
})

const mapDispatchToProps = dispatch => ({
  fetchPhotos: (nextPage, tag) => dispatch(actFetchPhotosRequest(nextPage, tag)),
  resetPhotos: () => dispatch(actResetPhotos()),
  setTag: tag => dispatch(actSetTag(tag))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JustifiedGallery)