import React, {useReducer} from 'react';

import PedidosReducer from './pedidosReducer';
import PedidoContext from './pedidosContext';
import {ActionTypes} from '../../types';
import {Pedido, Platillo} from '../../models/Platillo';

const PedidoState = ({children}: any) => {
  const initialState = {
    pedido: [],
    platillo: null,
    totalPagar: 0,
    idPedidoFB: '',
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

  const mostrarResumen = (total: number) => {
    dispatch({
      action: ActionTypes.MOSTRAR_RESUMEN,
      payload: total,
    });
  };

  const eliminaArticulo = (id: string) => {
    dispatch({
      action: ActionTypes.ELIMINAR_PRODUCTO,
      payload: id,
    });
  };

  const pedidoRealizado = (id: string) => {
    dispatch({
      action: ActionTypes.PEDIDO_ORDENADO,
      payload: id,
    });
  };

  return (
    <PedidoContext.Provider
      value={{
        pedido: state.pedido,
        platillo: state.platillo,
        totalPagar: state.totalPagar,
        idPedidoFB: state.idPedidoFB,
        seleccionarPlatillo,
        guardarPedido,
        mostrarResumen,
        eliminaArticulo,
        pedidoRealizado,
      }}>
      {children}
    </PedidoContext.Provider>
  );
};

export default PedidoState;
