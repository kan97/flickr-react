import * as Types from './../constants/ActionTypes'
import { callAPI } from './../utils/callAPI'

export const actFetchPhotosRequest = (nextPage, tag) => {
    return dispatch => {
        return callAPI(nextPage, tag).then(res => {
            dispatch(actFetchPhotos(res, tag))
        })
    }
}

const actFetchPhotos = (images, tag) => {
    return {
        type: Types.FETCH_PHOTOS,
        images,
        tag
    }
}

export const actResetPhotos = () => {
    return {
        type: Types.RESET_PHOTOS,
    }
}

export const actSetTag = tag => {
    return {
        type: Types.SET_TAG,
        tag
    }
}