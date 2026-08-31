import { DatosAuto } from '../types/datosAuto';
import { Cotizacion } from '../types/cotizacion';

export interface QuoteAdapter {
  cotizar(datos: DatosAuto): Promise<Cotizacion>;
}