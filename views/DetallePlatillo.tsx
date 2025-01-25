import React, {useContext} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import PedidoContext from '../context/pedidos/pedidosContext';
import {Card, Title, Paragraph, Text} from 'react-native-paper';
import {formatearCantidad} from '../helpers';
import globalStyles from '../styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types';

const DetallePlatillo = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {platillo} = useContext(PedidoContext);

  return (
    <View style={styles.container}>
      <Title style={styles.title}>{platillo.nombre}</Title>

      <Card style={styles.card}>
        <Card.Cover source={{uri: platillo.imagen}} style={styles.image} />
        <Card.Content>
          <Paragraph style={styles.description}>
            {platillo.descripcion}
          </Paragraph>
          <Text style={styles.price}>
            {formatearCantidad(Number(platillo.precio))}
          </Text>
        </Card.Content>
      </Card>

      <Pressable
        style={[globalStyles.btn, styles.button]}
        onPress={() => navigation.navigate('FormularioPlatillo')}>
        <Text style={globalStyles.btnTexto}>Ordenar Platillo</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card: {
    width: '90%',
    borderRadius: 8,
    elevation: 3,
    marginVertical: 20,
  },
  image: {
    borderRadius: 8,
    height: 200,
    width: '100%',
  },
  description: {
    fontSize: 16,
    marginVertical: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  button: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 20,
  },
});

export default DetallePlatillo;
