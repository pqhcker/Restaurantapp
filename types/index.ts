export type RootStackParamList = {
    NuevaOrden: undefined;
    Menu: undefined;
    DetallePlatillo: undefined;
    FormularioPlatillo: undefined;
    ResumenPedido: undefined;
    ProgresoPedido: { id: string };
}

export type OBTENER_PRODUCTOS_EXITO = 'OBTENER_PRODUCTOS_EXITO';
export type SELECCIONAR_PRODUCTO = 'SELECCIONAR_PRODUCTO';

export enum ActionTypes {
    OBTENER_PRODUCTOS_EXITO = 'OBTENER_PRODUCTOS_EXITO',
    SELECCIONAR_PRODUCTO = 'SELECCIONAR_PRODUCTO'
}

export interface ActionType {
    action: ActionTypes;
    payload: any;
}