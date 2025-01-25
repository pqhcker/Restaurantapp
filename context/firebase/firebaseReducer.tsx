import {ActionType, ActionTypes} from '../../types';

const FirebaseReducer = (state: any, action: ActionType) => {
  switch (action.action) {
    case ActionTypes.OBTENER_PRODUCTOS_EXITO:
      return {
        ...state,
        menu: action.payload,
      };

    default:
      return state;
  }
};
export default FirebaseReducer;
