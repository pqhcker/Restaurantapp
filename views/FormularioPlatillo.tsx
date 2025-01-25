import React, {useContext, useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {Button, FAB as FabIcon, Text, Title} from 'react-native-paper';
import {formatearCantidad} from '../helpers';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import PedidoContext from '../context/pedidos/pedidosContext';

const FormularioPlatillo = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {platillo} = useContext(PedidoContext);

  const pricePerUnit = Number(platillo.precio); // Price for one unit
  const [quantity, setQuantity] = useState(1); // Initial quantity
  const [subtotal, setSubtotal] = useState(pricePerUnit); // Initial subtotal

  //Guardar cantidad
  const calcularCantidad = (cantidad: string) => {
    if (cantidad === '') {
      setQuantity(1);
      setSubtotal(pricePerUnit);
      return;
    }
    const newQuantity = Number(cantidad);
    setQuantity(newQuantity);
    setSubtotal(newQuantity * pricePerUnit);
  };

  // Function to handle increment
  const handleIncrement = () => {
    const newQuantity = Number(quantity) + 1;
    setQuantity(newQuantity);
    setSubtotal(newQuantity * pricePerUnit);
  };

  // Function to handle decrement
  const handleDecrement = () => {
    if (Number(quantity) > 1) {
      const newQuantity = Number(quantity) - 1;
      setQuantity(newQuantity);
      setSubtotal(newQuantity * pricePerUnit);
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Cantidad</Title>

      <View style={styles.quantityContainer}>
        <FabIcon
          icon="minus"
          onPress={handleDecrement}
          style={styles.quantityButton}
        />

        <TextInput
          style={styles.quantityText}
          value={quantity.toString()}
          onChangeText={cantidad => calcularCantidad(cantidad)}
          keyboardType="numeric"
        />
        <FabIcon
          icon="plus"
          onPress={handleIncrement}
          style={styles.quantityButton}
        />
      </View>

      <Text style={styles.subtotal}>
        Subtotal: {formatearCantidad(subtotal)}
      </Text>

      <View style={styles.footer}>
        <Button
          mode="contained"
          onPress={() => console.log(`Added ${quantity} items to the order`)}
          buttonColor="#FFEB3B"
          textColor="black"
          style={styles.addButton}>
          AGREGAR AL PEDIDO
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    width: 60,
    height: 80,
    justifyContent: 'center',
    backgroundColor: '#FFEB3B',
  },
  quantityText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 40,
    textAlign: 'center',
  },
  subtotal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
  },
  addButton: {
    paddingVertical: 10,
    borderRadius: 8,
  },
});

export default FormularioPlatillo;
