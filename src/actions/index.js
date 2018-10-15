import * as Types from './../constants/ActionTypes'
import { callAPI } from './../utils/callAPI'

export const actFetchPhotosRequest = (nextPage, tag) => {
    return dispatch => {
        return callAPI(nextPage, tag).then(res => {
            dispatch(actFetchPhotos(res, tag))
        })
    }
}

export const actFetchPhotos = (images, tag) => {
    return {
        type: Types.FETCH_PHOTOS,
        images,
        tag
    }
}

export const actResetPhotos = tag => {
    return {
        type: Types.RESET_PHOTOS,
        tag
    }
}