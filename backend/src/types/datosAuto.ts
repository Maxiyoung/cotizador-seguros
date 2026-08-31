import { z } from 'zod';
import { datosAutoSchema } from '../schemas/datosAuto.schema';

export type DatosAuto = z.infer<typeof datosAutoSchema>;