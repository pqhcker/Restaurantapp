export interface Platillo {
    id: string;
    nombre: string;
    imagen: string;
    descripcion: string;
    precio: string;
    categoria: string;
}

export interface Pedido extends Platillo {
    cantidad: number;
    total: number;
}