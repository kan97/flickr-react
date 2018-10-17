import * as Types from './../constants/ActionTypes'

const initialState = {
    tag: ''
}

const tags = (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_TAG:
            return {...state, tag: action.tag}
        default:
            return state
    }
}

export default tags