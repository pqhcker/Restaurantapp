import React, {useReducer} from 'react';

import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';
import firebase from '../../firebase';

import {collection, onSnapshot, query, where} from 'firebase/firestore';
import {ActionTypes} from '../../types';
import _ from 'lodash';

const FirebaseState = ({children}: any) => {
  const initialState = {
    menu: [],
  };

  //useReducer
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  //Función que se ejecuta para traer los productos
  const obtenerProductos = () => {
    const platillodRef = collection(firebase.db, 'productos');
    const platilloQuery = query(platillodRef, where('existencia', '==', true));

    //Consultar Firebase
    onSnapshot(platilloQuery, snapshot => {
      let platillos = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      // Ordenar por categoría con lodash
      platillos = _.sortBy(platillos, 'categoria');

      dispatch({
        action: ActionTypes.OBTENER_PRODUCTOS_EXITO,
        payload: platillos,
      });
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        menu: state.menu,
        firebase,
        obtenerProductos,
      }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
