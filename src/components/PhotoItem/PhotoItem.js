import React from "react";
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const PhotoItem = ({images}) => {
  return images.map((image, i) => {
    const ratio = image.width / image.height;
    const flexBasis = 100 * ratio + image.height * ratio;

    // Src: https://codepen.io/anon/pen/JmoOEE?editors=1100
    // Name: Flex Justified Image Grid
    const FlexElement = styled(Link)`
      flex-grow: ${ratio};
      flex-basis: ${flexBasis}px;
      max-height: ${400}px;
      max-width: ${400 * ratio}px;
      background-image: url(${image.src});
      background-position: center;
      &:before {
        padding-top: ${100 / ratio}%;
      }
    `;
    return (
      <FlexElement
        key={i}
        className="photo effect-julia"
        to={`/photo/${image.photo_id}`}
        style={{ textDecoration: "none" }}
      >
        <div className="info">
          <div className="title" style={{ maxWidth: flexBasis }}>
            {image.caption}
          </div>
          <div className="owner_name" style={{ maxWidth: flexBasis }}>
            by {image.ownername}
          </div>
          <div className="view">
            <i className="far fa-eye" />
            {image.views}
          </div>
        </div>
      </FlexElement>
    );
  });
};

export default PhotoItem