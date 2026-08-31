import { z } from 'zod';

export const datosAutoSchema = z.object({
  contacto: z.object({
    dni: z.string().min(7, 'El DNI debe tener al menos 7 números').max(9, 'DNI inválido'),
    nombre: z.string().min(2, 'El nombre es obligatorio'),
    email: z.string().email('Ingresá un correo electrónico válido'),
    telefono: z.string().min(8, 'Ingresá un teléfono válido'),
  }),
  vehiculo: z.object({
    marca: z.string().min(1, 'Seleccioná una marca'),
    modelo: z.string().min(1, 'Seleccioná un modelo'),
    anio: z.coerce.number().min(1990, 'Año muy antiguo').max(new Date().getFullYear() + 1, 'Año inválido'),
    esOkm: z.boolean(),
    uso: z.enum(['particular', 'comercial'], { required_error: 'Seleccioná el uso' }),
    valorVehiculo: z.coerce.number().min(100000, 'Revisá el valor ingresado'),
    codigoPostal: z.string().min(4, 'Código postal inválido'),
    provincia: z.string().min(1, 'Seleccioná una provincia'),
  }),
  tipoPersona: z.enum(['F', 'J']),
  genero: z.enum(['M', 'F']),
});

// 👇 ESTA ES LA LÍNEA QUE FALTABA Y QUE SOLUCIONA EL ERROR 👇
export type DatosAutoFormData = z.infer<typeof datosAutoSchema>;