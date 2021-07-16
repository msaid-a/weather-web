import {iAlbum} from '../../model'
import {createAction} from '../../utilities'

export const GET_ALBUM = 'ALBUM.GET_ALBUM'

export const setAlbum = (album: iAlbum[]) => {
    return createAction<iAlbum[]>(GET_ALBUM, album)
}