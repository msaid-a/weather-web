import {iUser} from '../../model'
import {createAction} from '../../utilities'

export const GET_USER = 'USERS.GET_USERS'

export const setAlbum = (users: iUser[]) => {
    return createAction<iUser[]>(GET_USER, users)
}