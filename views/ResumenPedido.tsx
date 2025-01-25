import React, {useContext, useEffect} from 'react';
import {StyleSheet, Alert, View} from 'react-native';
import {formatearCantidad} from '../helpers';
import {Card, Title, Paragraph, Text, Button} from 'react-native-paper';
import globalStyles from '../styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import PedidoContext from '../context/pedidos/pedidosContext';
import {Pedido} from '../models/Platillo';
import {ScrollView} from 'react-native-gesture-handler';

const ResumenPedido = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {pedido, totalPagar, mostrarResumen, eliminaArticulo} =
    useContext(PedidoContext);

  useEffect(() => {
    calcularTotal();
  }, [pedido]);

  const calcularTotal = () => {
    let nuevoTotal = 0;
    nuevoTotal = pedido.reduce(
      (nuevoTotal: number, articulo: Pedido) => nuevoTotal + articulo.total,
      0,
    );
    mostrarResumen(nuevoTotal);
  };

  const confirmarPedido = () => {
    Alert.alert(
      'Revisa tu pedido',
      `Una vez que confirmes no podrás cambiarlo`,
      [
        {
          text: 'Confirmar',
          onPress: () => {
            navigation.navigate('ProgresoPedido');
          },
        },
        {
          text: 'Revisar',
          style: 'cancel',
        },
      ],
    );
  };

  const confirmarEliminacion = (id: string) => {
    Alert.alert(
      '¿Deseas eliminar este articulo?',
      `Una vez que eliminado no se puede recuperar`,
      [
        {
          text: 'Confirmar',
          onPress: () => {
            eliminaArticulo(id);
          },
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Resumen Pedido</Title>
      <ScrollView>
        {pedido.map((pedido: Pedido, index: number) => (
          <Card key={pedido.idPedido} style={styles.card}>
            <View style={styles.itemContainer}>
              <Card.Cover source={{uri: pedido.imagen}} style={styles.image} />
              <View style={styles.itemDetails}>
                <Title style={styles.itemTitle}>{pedido.nombre}</Title>
                <Text style={styles.itemText}>Cantidad: {pedido.cantidad}</Text>
                <Text style={styles.itemText}>
                  Precio: {formatearCantidad(Number(pedido.precio))}
                </Text>
              </View>
            </View>
            <Button
              mode="contained"
              onPress={() => confirmarEliminacion(pedido.idPedido)}
              buttonColor="red"
              textColor="white"
              style={styles.removeButton}>
              ELIMINAR
            </Button>
          </Card>
        ))}
      </ScrollView>

      <Text style={styles.total}>
        Total a Pagar: {formatearCantidad(totalPagar)}
      </Text>

      <View style={styles.footer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Menu')}
          buttonColor="black"
          textColor="white"
          style={styles.footerButton}>
          SEGUIR PIDIENDO
        </Button>
        <Button
          mode="contained"
          onPress={() => confirmarPedido()}
          buttonColor="#FFEB3B"
          textColor="black"
          style={styles.footerButton}>
          ORDENAR PEDIDO
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    flex: 1,
  },
  card: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 14,
    marginVertical: 2,
  },
  removeButton: {
    borderRadius: 8,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  footerButton: {
    marginVertical: 5,
    borderRadius: 8,
  },
});

export default ResumenPedido;
