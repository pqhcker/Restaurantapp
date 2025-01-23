import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from './views/Menu';
import NuevaOrden from './views/NuevaOrden';
import DetallePedido from './views/DetallePlatillo';
import FormularioPlatillo from './views/FormularioPlatillo';
import ProgresoPedido from './views/ProgresoPedido';
import ResumenPedido from './views/ResumenPedido';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Menu'} component={Menu} />
        <Stack.Screen name={'NuevaOrden'} component={NuevaOrden} />
        <Stack.Screen name={'DetallePedido'} component={DetallePedido} />
        <Stack.Screen
          name={'FormularioPlatillo'}
          component={FormularioPlatillo}
        />
        <Stack.Screen name={'ProgresoPedido'} component={ProgresoPedido} />
        <Stack.Screen name={'ResumenPedido'} component={ResumenPedido} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
