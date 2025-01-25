import React, {useContext, useEffect, Fragment} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import globalStyles from '../styles';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {Card, Divider, List, Subheading, Title} from 'react-native-paper';
import {Platillo} from '../models/Platillo';
import {formatearCantidad} from '../helpers';

const Menu = (): React.JSX.Element => {
  const {menu, obtenerProductos} = useContext(FirebaseContext);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const mostrarHeading = (categoria: string, index: number) => {
    const categorioAnterior = menu[index - 1]?.categoria;
    if (categoria !== categorioAnterior) {
      return (
        <View>
          <View style={styles.separador}>
            <Title style={styles.separadorTexto}>{categoria}</Title>
          </View>
          <Divider bold />
        </View>
      );
    }
  };

  return (
    <View style={globalStyles.contenedor}>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <ScrollView>
          {menu.map((platillo: Platillo, index: number) => (
            <Fragment key={platillo.id}>
              {mostrarHeading(platillo.categoria, index)}
              <Card key={platillo.id} style={{margin: 10}}>
                <Card.Cover source={{uri: platillo.imagen}} />
                <Card.Content>
                  <Title>{platillo.nombre}</Title>
                  <Subheading numberOfLines={2} ellipsizeMode="tail">
                    {platillo.descripcion}
                  </Subheading>
                  <Text
                    style={{marginTop: 10, fontSize: 20, fontWeight: 'bold'}}>
                    {formatearCantidad(Number(platillo.precio))}
                  </Text>
                </Card.Content>
              </Card>
            </Fragment>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  separador: {
    backgroundColor: '#000',
  },
  separadorTexto: {
    color: 'yellow',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 18,
    padding: 5,
    marginLeft: 8,
  },
});

export default Menu;
