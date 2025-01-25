export const formatearCantidad = (cantidad: number): string => {
    return cantidad.toLocaleString('es-CR', {
        style: 'currency',
        currency: 'CRC',
    });
}
export const generarId = (): string => {
    const random = Math.random().toString(36).substring(2, 11);
    const fecha = Date.now().toString(36);
    return random + fecha;
}