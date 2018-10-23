import photos from './photos'
import * as Types from './../constants/ActionTypes'

describe('photos reducer', () => {
    it('should handle initial state', () => {
        expect(
            photos(undefined, {})
        ).toEqual({
            nextPage: 1,
            images: []
        })
    })

    it('should handle FETCH_PHOTOS', () => {
        expect(photos({
            nextPage: 1,
            images: []
        }, {
            type: Types.FETCH_PHOTOS,
            images: [{
                photo_id: '45459184871',
                src: 'https:////c1.staticflickr.com/2/1942/45459184871_248efc5e08_m.jpg',
                caption: 'Barn Owl - IMG_8876-Edit-1',
                ownername: 'Arvind Agrawal',
                views: '40753',
                width: 100,
                height: 67
            }]
        })).toEqual({
            images: [{
                photo_id: '45459184871',
                src: 'https:////c1.staticflickr.com/2/1942/45459184871_248efc5e08_m.jpg',
                caption: 'Barn Owl - IMG_8876-Edit-1',
                ownername: 'Arvind Agrawal',
                views: '40753',
                width: 100,
                height: 67
            }],
            nextPage: 2
        })

        expect(photos({
            nextPage: 2,
            images: [{
                photo_id: '45459184871',
                src: 'https:////c1.staticflickr.com/2/1942/45459184871_248efc5e08_m.jpg',
                caption: 'Barn Owl - IMG_8876-Edit-1',
                ownername: 'Arvind Agrawal',
                views: '40753',
                width: 100,
                height: 67
            }]
        }, {
            type: Types.FETCH_PHOTOS,
            images: [{
                photo_id: '31588194188',
                src: 'https:////c1.staticflickr.com/2/1963/31588194188_970d487c97_m.jpg',
                caption: 'Little one',
                ownername: 'davy renney',
                views: '41241',
                width: 100,
                height: 71
            }]
        })).toEqual({
            images: [{
                photo_id: '45459184871',
                src: 'https:////c1.staticflickr.com/2/1942/45459184871_248efc5e08_m.jpg',
                caption: 'Barn Owl - IMG_8876-Edit-1',
                ownername: 'Arvind Agrawal',
                views: '40753',
                width: 100,
                height: 67
            }, {
                photo_id: '31588194188',
                src: 'https:////c1.staticflickr.com/2/1963/31588194188_970d487c97_m.jpg',
                caption: 'Little one',
                ownername: 'davy renney',
                views: '41241',
                width: 100,
                height: 71
            }],
            nextPage: 3
        })
    })

    it('should handle RESET_PHOTOS', () => {
        expect(photos({
            nextPage: 1,
            images: []
        }, {
            type: Types.RESET_PHOTOS
        })).toEqual({
            nextPage: 1,
            images: []
        })

        expect(photos({
            images: [{
                photo_id: '45459184871',
                src: 'https:////c1.staticflickr.com/2/1942/45459184871_248efc5e08_m.jpg',
                caption: 'Barn Owl - IMG_8876-Edit-1',
                ownername: 'Arvind Agrawal',
                views: '40753',
                width: 100,
                height: 67
            }, {
                photo_id: '31588194188',
                src: 'https:////c1.staticflickr.com/2/1963/31588194188_970d487c97_m.jpg',
                caption: 'Little one',
                ownername: 'davy renney',
                views: '41241',
                width: 100,
                height: 71
            }],
            nextPage: 3
        }, {
            type: Types.RESET_PHOTOS
        })).toEqual({
            nextPage: 1,
            images: []
        })
    })
})