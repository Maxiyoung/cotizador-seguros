import { z } from 'zod'

export const ContactoSchema = z.object({
  dni: z
    .string()
    .min(1, 'DNI es requerido')
    .regex(/^\d{1,3}(\.\d{3})*$|^\d{7,8}$/, 'DNI inválido'),
  nombre: z
    .string()
    .min(3, 'Nombre debe tener al menos 3 caracteres')
    .max(100, 'Nombre muy largo'),
  email: z
    .string()
    .email('Email inválido'),
  telefono: z
    .string()
    .min(10, 'Teléfono inválido')
    .max(20, 'Teléfono muy largo')
    .regex(/^[\d\s\-\+\(\)]{10,}$/, 'Teléfono contiene caracteres inválidos'),
})

export const VehiculoSchema = z.object({
  marca: z
    .string()
    .min(2, 'Marca es requerida')
    .max(50, 'Marca muy larga'),
  modelo: z
    .string()
    .min(1, 'Modelo es requerido')
    .max(100, 'Modelo muy largo'),
  anio: z
    .number()
    .int('Año debe ser un número entero')
    .min(1990, 'Año no puede ser anterior a 1990')
    .max(new Date().getFullYear() + 1, 'Año no válido'),
  esOkm: z
    .boolean(),
  uso: z
    .enum(['particular', 'comercial'], {
      errorMap: () => ({ message: 'Uso debe ser particular o comercial' }),
    }),
  valorVehiculo: z
    .number()
    .positive('Valor debe ser mayor a 0')
    .max(10000000, 'Valor muy alto'),
  codigoPostal: z
    .string()
    .min(4, 'Código postal inválido')
    .max(8, 'Código postal inválido'),
  provincia: z
    .string()
    .min(2, 'Provincia es requerida')
    .max(50, 'Provincia muy larga'),
})

export const FormStateSchema = z.object({
  contacto: ContactoSchema,
  vehiculo: VehiculoSchema,
  tipoPersona: z.enum(['F', 'J']),
  genero: z.enum(['M', 'F']),
})

export type FormState = z.infer<typeof FormStateSchema>
export type ContactoForm = z.infer<typeof ContactoSchema>
export type VehiculoForm = z.infer<typeof VehiculoSchema>
