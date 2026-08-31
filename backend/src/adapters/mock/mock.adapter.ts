import { QuoteAdapter } from '../types';
import { DatosAuto } from '../../types/datosAuto';
import { Cotizacion, PlanCotizado } from '../../types/cotizacion';

function generarPlanesFalsos(precioBase: number): PlanCotizado[] {
  return [
    { codigoPlan: '1', nombre: 'Responsabilidad Civil', precio: precioBase, vigencia: 'MENSUAL' },
    { codigoPlan: '2', nombre: 'Terceros Completo', precio: precioBase * 1.8, vigencia: 'MENSUAL' },
    { codigoPlan: '3', nombre: 'Todo Riesgo', precio: precioBase * 3.2, vigencia: 'MENSUAL' },
  ];
}

// Fábrica: le pasás nombre y precio base, te devuelve un adapter completo
// que cumple la interfaz QuoteAdapter, como si fuera una compañía real.
export function crearMockAdapter(nombreAseguradora: string, precioBase: number): QuoteAdapter {
  return {
    async cotizar(datos: DatosAuto): Promise<Cotizacion> {
      // simula latencia de red real, para que el frontend
      // tenga que manejar loading de verdad, no una respuesta instantánea
      await new Promise((resolve) => setTimeout(resolve, 300 + Math.random() * 700));

      return {
        aseguradora: nombreAseguradora,
        numeroCotizacion: `MOCK-${Date.now()}`,
        fechaCotizacion: new Date().toLocaleDateString('es-AR'),
        planes: generarPlanesFalsos(precioBase),
      };
    },
  };
}
