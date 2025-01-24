import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    contenedor: {
        flex: 1,
    },
    contenido: {
        marginHorizontal: '2.5%',
        flex: 1,
    },
    btn: {
        backgroundColor: '#FFDA00',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    btnTexto: {
        color: 'black',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});
export default globalStyles;