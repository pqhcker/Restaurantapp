export interface Platillo {
    id: string;
    nombre: string;
    imagen: string;
    descripcion: string;
    precio: string;
    categoria: string;
}

export interface Pedido extends Platillo {
    idPedido: string;
    cantidad: number;
    total: number;
}

export interface PedidoCompleto {
    tiempoEntrega: number;
    completado: boolean;
    total: number;
    orden: Pedido[];
    creado: number;
}