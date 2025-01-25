export type RootStackParamList = {
    NuevaOrden: undefined;
    Menu: undefined;
    DetallePedido: { id: string };
    FormularioPlatillo: { platillo: string; id: string; precio: number };
    ResumenPedido: undefined;
    ProgresoPedido: { id: string };
}

export type OBTENER_PRODUCTOS_EXITO = 'OBTENER_PRODUCTOS_EXITO';

export enum ActionTypes {
    OBTENER_PRODUCTOS_EXITO = 'OBTENER_PRODUCTOS_EXITO'
}

export interface ActionType {
    action: ActionTypes;
    payload: any;
}