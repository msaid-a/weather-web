import {GET_USER} from '../action/users.action'
import {usersDefaultState, usersReduxState} from '../states/user.state'
import {AnyAction} from 'redux'

const headlineReducer = (state : usersReduxState = usersDefaultState, action : AnyAction) => {
    switch (action.type) {
        case GET_USER:
          return {
            ...state,
            users: action.payload
          };
        default:
          return state;
      }
}

export default headlineReducer