import { useState } from 'react';
import type { Cotizacion } from '../types/cotizacion'; // Asumiendo que tenés los tipos exportados
import type { DatosAutoFormData } from "../schemas/datosAuto.schema";

export function useCotizar() {
  const [quotes, setQuotes] = useState<Cotizacion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchCotizaciones = async (data: DatosAutoFormData) => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(import.meta.env.VITE_API_URL || 'http://localhost:3000/cotizar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => null);
        throw new Error(errData?.error || 'No se pudo obtener la cotización.');
      }

      const result = (await response.json()) as Cotizacion[];
      setQuotes(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado de conexión.');
    } finally {
      setLoading(false);
    }
  };

  return { quotes, loading, error, fetchCotizaciones };
}