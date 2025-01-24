export type RootStackParamList = {
    NuevaOrden: undefined;
    Menu: undefined;
    DetallePedido: { id: string };
    FormularioPlatillo: { platillo: string; id: string; precio: number };
    ResumenPedido: undefined;
    ProgresoPedido: { id: string };
}