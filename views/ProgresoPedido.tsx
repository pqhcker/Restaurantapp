import React, {useContext, useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import globalStyles from '../styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import PedidoContext from '../context/pedidos/pedidosContext';
import firebase from '../firebase';
import {doc, onSnapshot} from 'firebase/firestore';
import {PedidoCompleto} from '../models/Platillo';
import Countdown from 'react-countdown';
import {Button} from 'react-native-paper';

const ProgresoPedido = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {idPedidoFB} = useContext(PedidoContext);
  const [tiempo, setTiempo] = useState(0);
  const [completado, setCompletado] = useState(false);

  useEffect(() => {
    try {
      const ordenRef = doc(firebase.db, 'ordenes', idPedidoFB);
      const obtenerProducto = onSnapshot(ordenRef, snapshot => {
        const data = snapshot.data();
        if (data) {
          const orden: PedidoCompleto = data as PedidoCompleto;
          setTiempo(orden.tiempoEntrega);
          setCompletado(orden.completado);
        }
      });

      return () => obtenerProducto();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const renderer = ({minutes, seconds}: any) => {
    return (
      <Text style={styles.tiempo}>
        {minutes}:{seconds}
      </Text>
    );
  };

  return (
    <View style={globalStyles.contenedor}>
      <View style={globalStyles.contenido}>
        {tiempo === 0 && (
          <>
            <Text style={{textAlign: 'center', marginTop: 20}}>
              Hemos recibido tu orden...
            </Text>
            <Text style={{textAlign: 'center'}}>
              Estamos calculando el tiempo de entrega
            </Text>
          </>
        )}
        {!completado && tiempo > 0 && (
          <>
            <Text style={{textAlign: 'center', fontSize: 20, marginTop: 20}}>
              Su pedido estará listo en:
            </Text>
            <Text style={{textAlign: 'center', fontSize: 20, marginBottom: 20}}>
              <Countdown
                date={Date.now() + tiempo * 60000}
                renderer={renderer}
              />
            </Text>
          </>
        )}
        {completado && (
          <>
            <Text style={styles.textoCompleatado}>Orden Lista</Text>
            <Text style={styles.textoCompleatado}>
              Por favor, pase a recoger su pedido
            </Text>
            <Pressable
              style={[globalStyles.btn, {marginTop: 100}]}
              onPress={() => navigation.navigate('NuevaOrden')}>
              <Text style={globalStyles.btnTexto}>
                Comenzar una nueva orden
              </Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tiempo: {
    marginBottom: 20,
    fontSize: 60,
    textAlign: 'center',
    marginTop: 20,
  },
  textoCompleatado: {
    textAlign: 'center',
    textTransform: 'uppercase',
    margin: 20,
    fontSize: 25,
  },
});

export default ProgresoPedido;
