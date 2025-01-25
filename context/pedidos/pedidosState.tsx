import React, {useReducer} from 'react';

import PedidosReducer from './pedidosReducer';
import PedidoContext from './pedidosContext';
import {ActionTypes} from '../../types';
import {Pedido, Platillo} from '../../models/Platillo';

const PedidoState = ({children}: any) => {
  const initialState = {
    pedido: [],
    platillo: null,
  };

  //useReducer
  const [state, dispatch] = useReducer(PedidosReducer, initialState);

  //Selecciona el producto que el usuario desea ordenar
  const seleccionarPlatillo = (platillo: Platillo) => {
    dispatch({
      action: ActionTypes.SELECCIONAR_PRODUCTO,
      payload: platillo,
    });
  };

  //Cuando el usuario confirma un platillo
  const guardarPedido = (pedido: Pedido) => {
    dispatch({
      action: ActionTypes.CONFIRMAR_ORDENAR_PLATILLO,
      payload: pedido,
    });
  };

  return (
    <PedidoContext.Provider
      value={{
        pedido: state.pedido,
        platillo: state.platillo,
        seleccionarPlatillo,
        guardarPedido,
      }}>
      {children}
    </PedidoContext.Provider>
  );
};

export default PedidoState;
