import tags from './tags'
import * as Types from './../constants/ActionTypes'

describe('tags reducer', () => {
    it('should handle initial state', () => {
        expect(
            tags(undefined, {})
        ).toEqual({
            tag: ''
        })
    })

    it('should handle SET_TAG', () => {
        expect(tags({
            tag: ''
        }, {
            type: Types.SET_TAG,
            tag: 'sun'
        })).toEqual({
            tag: 'sun'
        })

        expect(tags({
            tag: 'moon'
        }, {
            type: Types.SET_TAG,
            tag: ''
        })).toEqual({
            tag: ''
        })
    })
})