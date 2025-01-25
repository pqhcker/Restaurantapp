import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';

const Menu = (): React.JSX.Element => {
  const {menu, obtenerProductos} = useContext(FirebaseContext);

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <View>
      <Text>Menu</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Menu;
