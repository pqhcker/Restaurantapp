import React, {useContext, useEffect, Fragment} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import globalStyles from '../styles';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {Divider, List, Title} from 'react-native-paper';
import {Platillo} from '../models/Platillo';

const Menu = (): React.JSX.Element => {
  const {menu, obtenerProductos} = useContext(FirebaseContext);

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <View style={globalStyles.contenedor}>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <ScrollView>
          {menu.map((platillo: Platillo) => (
            <Fragment key={platillo.id}>
              <Title style={styles.categoriaEncabezado}>
                {platillo.categoria}
              </Title>
              <View key={platillo.id}>
                <List.Item
                  title={platillo.nombre}
                  description={platillo.descripcion}
                  onPress={() => {
                    console.log('Ir a detalle');
                  }}
                />
                <Divider />
              </View>
            </Fragment>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriaEncabezado: {
    padding: 5,
    backgroundColor: 'black',
    color: 'yellow',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Menu;
