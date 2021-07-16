import {iPhotos} from '../../model/index'

export interface photosReduxState {
    photos: iPhotos[]
}

export const photosDefaultState : photosReduxState = {
    photos: []
}