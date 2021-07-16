import {GET_PHOTOS} from '../action/photos.action'
import {photosDefaultState, photosReduxState} from '../states/photos.state'
import {AnyAction} from 'redux'

const headlineReducer = (state : photosReduxState = photosDefaultState, action : AnyAction) => {
    switch (action.type) {
        case GET_PHOTOS:
          return {
            ...state,
            photos: action.payload
          };
        default:
          return state;
      }
}

export default headlineReducer