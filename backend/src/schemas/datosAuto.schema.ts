import { z } from 'zod';

export const datosAutoSchema = z.object({
  contacto: z.object({
    dni: z.string().min(7).max(8),
    nombre: z.string().min(1),
    email: z.string().email(),
    telefono: z.string().min(6),
  }),
  vehiculo: z.object({
    marca: z.string().min(1),
    modelo: z.string().min(1),
    anio: z.number().int().min(1990).max(new Date().getFullYear() + 1),
    esOkm: z.boolean(),
    uso: z.enum(['particular', 'comercial']),
    valorVehiculo: z.number().positive(),
    codigoPostal: z.string().min(4),
    provincia: z.string().min(1),
  }),
  tipoPersona: z.enum(['F', 'J']),
  genero: z.enum(['M', 'F']),
});