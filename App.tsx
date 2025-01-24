import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NuevaOrden from './views/NuevaOrden';
import Menu from './views/Menu';
import DetallePedido from './views/DetallePlatillo';
import FormularioPlatillo from './views/FormularioPlatillo';
import ResumenPedido from './views/ResumenPedido';
import ProgresoPedido from './views/ProgresoPedido';

import FirebaseState from './context/firebase/firebaseState';
import PedidoState from './context/pedidos/pedidosState';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <FirebaseState>
      <PedidoState>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#FFDA00'},
              headerTitleStyle: {fontWeight: 'bold'},
              headerTintColor: '#000',
            }}>
            <Stack.Screen
              name={'NuevaOrden'}
              component={NuevaOrden}
              options={{title: 'Nueva Orden'}}
            />
            <Stack.Screen
              name={'Menu'}
              component={Menu}
              options={{title: 'Nuestro Menu'}}
            />

            <Stack.Screen
              name={'DetallePedido'}
              component={DetallePedido}
              options={{title: 'Detalle Platillo'}}
            />
            <Stack.Screen
              name={'FormularioPlatillo'}
              component={FormularioPlatillo}
              options={{title: 'Ordenar Platillo'}}
            />
            <Stack.Screen
              name={'ResumenPedido'}
              component={ResumenPedido}
              options={{title: 'Resumen Pedido'}}
            />
            <Stack.Screen
              name={'ProgresoPedido'}
              component={ProgresoPedido}
              options={{title: 'Progreso Pedido'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PedidoState>
    </FirebaseState>
  );
}

const styles = StyleSheet.create({});

export default App;
