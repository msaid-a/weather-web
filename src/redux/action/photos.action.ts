import {iPhotos} from '../../model'
import {createAction} from '../../utilities'

export const GET_PHOTOS = 'PHOTOS.GET_PHOTOS'

export const setAlbum = (photos: iPhotos[]) => {
    return createAction<iPhotos[]>(GET_PHOTOS, photos)
}