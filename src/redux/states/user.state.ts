import {iUser} from '../../model/index'

export interface usersReduxState {
    user: iUser[]
}

export const usersDefaultState : usersReduxState = {
    user: []
}