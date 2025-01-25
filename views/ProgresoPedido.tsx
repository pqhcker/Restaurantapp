import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import globalStyles from '../styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import PedidoContext from '../context/pedidos/pedidosContext';

const ProgresoPedido = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {idPedidoFB} = useContext(PedidoContext);
  return (
    <View>
      <Text>{idPedidoFB}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProgresoPedido;
