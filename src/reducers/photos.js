import * as Types from './../constants/ActionTypes'

const initialState = {
  nextPage: 1,
  images: []
}

const photos = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PHOTOS:
      return {
        ...state,
        nextPage: state.nextPage + 1,
        images: [...state.images, ...action.images]
      }
    case Types.RESET_PHOTOS:
      return {
        ...state,
        nextPage: 1,
        images: []
      }
    default:
      return state;
  }
};

export default photos