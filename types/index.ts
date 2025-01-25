export type RootStackParamList = {
    NuevaOrden: undefined;
    Menu: undefined;
    DetallePlatillo: undefined;
    FormularioPlatillo: undefined;
    ResumenPedido: undefined;
    ProgresoPedido: undefined;
}

export type OBTENER_PRODUCTOS_EXITO = 'OBTENER_PRODUCTOS_EXITO';
export type SELECCIONAR_PRODUCTO = 'SELECCIONAR_PRODUCTO';
export type CONFIRMAR_ORDENAR_PLATILLO = 'CONFIRMAR_ORDENAR_PLATILLO';
export type MOSTRAR_RESUMEN = 'MOSTRAR_RESUMEN';
export type ELIMINAR_PRODUCTO = 'ELIMINAR_PRODUCTO';
export type PEDIDO_ORDENADO = 'PEDIDO_ORDENADO';

export enum ActionTypes {
    OBTENER_PRODUCTOS_EXITO = 'OBTENER_PRODUCTOS_EXITO',
    SELECCIONAR_PRODUCTO = 'SELECCIONAR_PRODUCTO',
    CONFIRMAR_ORDENAR_PLATILLO = 'CONFIRMAR_ORDENAR_PLATILLO',
    MOSTRAR_RESUMEN = 'MOSTRAR_RESUMEN',
    ELIMINAR_PRODUCTO = 'ELIMINAR_PRODUCTO',
    PEDIDO_ORDENADO = 'PEDIDO_ORDENADO',
}

export interface ActionType {
    action: ActionTypes;
    payload: any;
}