import { AnyAction } from 'redux';

export const createAction = <T> (type: string, payload: T): AnyAction => ({ 
    type, 
    payload 
  });
  