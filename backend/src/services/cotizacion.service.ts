import { QuoteAdapter } from '../adapters/types';
import { crearMockAdapter } from '../adapters/mock/mock.adapter';
import { DatosAuto } from '../types/datosAuto';
import { Cotizacion } from '../types/cotizacion';

const adapters: QuoteAdapter[] = [
  crearMockAdapter('Aseguradora Norte', 40000),
  crearMockAdapter('Aseguradora Sur', 55000),
  crearMockAdapter('Aseguradora Centro', 48000),
];

export async function obtenerCotizaciones(datos: DatosAuto): Promise<Cotizacion[]> {
  const resultados = await Promise.allSettled(
    adapters.map((adapter) => adapter.cotizar(datos))
  );

  return resultados
    .filter((r): r is PromiseFulfilledResult<Cotizacion> => r.status === 'fulfilled')
    .map((r) => r.value);
}