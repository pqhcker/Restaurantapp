import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import globalStyles from '../styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import PedidoContext from '../context/pedidos/pedidosContext';
import firebase from '../firebase';
import {doc, onSnapshot} from 'firebase/firestore';
import {PedidoCompleto} from '../models/Platillo';

const ProgresoPedido = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {idPedidoFB} = useContext(PedidoContext);
  const [tiempo, setTiempo] = useState(0);

  useEffect(() => {
    try {
      const ordenRef = doc(firebase.db, 'ordenes', idPedidoFB);
      const obtenerProducto = onSnapshot(ordenRef, snapshot => {
        const data = snapshot.data();
        if (data) {
          const orden: PedidoCompleto = data as PedidoCompleto;
          setTiempo(orden.tiempoEntrega);
        }
      });

      return () => obtenerProducto();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View>
      <Text>{idPedidoFB}</Text>
      <Text>{tiempo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProgresoPedido;
