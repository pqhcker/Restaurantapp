import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import globalStyles from '../styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types';

const NuevaOrden = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={globalStyles.contenedor}>
      <View style={[globalStyles.contenido, styles.contenido]}>
        <Pressable
          style={globalStyles.btn}
          onPress={() => navigation.navigate('Menu')}>
          <Text style={globalStyles.btnTexto}>Crear Nueva Orden</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenido: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default NuevaOrden;
