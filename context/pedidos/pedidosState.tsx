import React, {useReducer} from 'react';

import PedidosReducer from './pedidosReducer';
import PedidoContext from './pedidosContext';

const PedidoState = ({children}: any) => {
  const initialState = {
    pedido: [],
  };

  //useReducer
  const [state, dispatch] = useReducer(PedidosReducer, initialState);

  return (
    <PedidoContext.Provider
      value={{
        pedido: state.pedido,
      }}>
      {children}
    </PedidoContext.Provider>
  );
};

export default PedidoState;
