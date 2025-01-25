import {ActionType, ActionTypes} from '../../types';

const PedidosReducer = (state: any, action: ActionType) => {
  switch (action.action) {
    case ActionTypes.SELECCIONAR_PRODUCTO:
      return {
        ...state,
        platillo: action.payload,
      };
    case ActionTypes.CONFIRMAR_ORDENAR_PLATILLO:
      return {
        ...state,
        pedido: [...state.pedido, action.payload],
      };
    case ActionTypes.MOSTRAR_RESUMEN:
      return {
        ...state,
        totalPagar: action.payload,
      };
    case ActionTypes.ELIMINAR_PRODUCTO:
      return {
        ...state,
        pedido: state.pedido.filter(
          (pedido: any) => pedido.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};
export default PedidosReducer;
