import { Router, Request, Response, NextFunction } from 'express';
import { obtenerCotizaciones } from '../services/cotizacion.service';
import { datosAutoSchema } from '../schemas/datosAuto.schema';

export const cotizarRouter = Router();

cotizarRouter.post('/cotizar', async (req: Request, res: Response, next: NextFunction) => {
  const parsed = datosAutoSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: 'Datos inválidos',
      detalles: parsed.error.issues,
    });
  }

  try {
    const cotizaciones = await obtenerCotizaciones(parsed.data);
    res.json(cotizaciones);
  } catch (error) {
    next(error);
  }
});