export const formatearCantidad = (cantidad: number): string => {
    return cantidad.toLocaleString('es-CR', {
        style: 'currency',
        currency: 'CRC',
    });
}