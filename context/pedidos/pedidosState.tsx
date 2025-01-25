import React, {useReducer} from 'react';

import PedidosReducer from './pedidosReducer';
import PedidoContext from './pedidosContext';
import {ActionTypes} from '../../types';
import {Platillo} from '../../models/Platillo';

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

  return (
    <PedidoContext.Provider
      value={{
        pedido: state.pedido,
        platillo: state.platillo,
        seleccionarPlatillo,
      }}>
      {children}
    </PedidoContext.Provider>
  );
};

export default PedidoState;
