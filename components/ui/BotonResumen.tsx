import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {RootStackParamList} from '../../types';
import PedidoContext from '../../context/pedidos/pedidosContext';

const BotonResumen = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {pedido} = useContext(PedidoContext);

  if (pedido.length === 0) {
    return <View />;
  }

  return (
    <Button
      icon="arrow-right"
      mode="contained"
      contentStyle={{flexDirection: 'row-reverse'}}
      compact={true}
      onPress={() => navigation.navigate('ResumenPedido')}
      style={styles.button}>
      <Text style={styles.textoBoton}>Ir a pedido</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
    backgroundColor: '#FFDA00',
  },
  textoBoton: {
    color: 'black',
    fontSize: 10,
    textTransform: 'uppercase',
  },
});

export default BotonResumen;
