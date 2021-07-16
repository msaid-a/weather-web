import {iAlbum} from '../../model/index'

export interface albumReduxState {
    album: iAlbum[]
}

export const albumDefaultState : albumReduxState = {
    album: []
}