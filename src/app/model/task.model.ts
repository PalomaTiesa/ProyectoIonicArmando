export interface Task {
    id: number;
    titulo: string;
    descripcion: string;
    finalizado: boolean;
    // el ? es para que sea opcional, no es necesario ponerlo en el home.page.ts
    prioridad?: 'baja' | 'media' | 'alta';
}