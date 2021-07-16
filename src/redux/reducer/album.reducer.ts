import {GET_ALBUM} from '../action/album.action'
import {albumDefaultState, albumReduxState} from '../states/album.state'
import {AnyAction} from 'redux'

const headlineReducer = (state : albumReduxState = albumDefaultState, action : AnyAction) => {
    switch (action.type) {
        case GET_ALBUM:
          return {
            ...state,
            album: action.payload
          };
        default:
          return state;
      }
}

export default headlineReducer