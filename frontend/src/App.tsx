import { FormularioCotizacion } from './components/form/FormularioCotizacion';
import { ResultadosCotizacion } from './components/results/ResultadosCotizacion';
import { useCotizar } from './hooks/useCotizar';

export default function App() {
  const { quotes, loading, error, fetchCotizaciones } = useCotizar();

  return (
    <div className="min-h-screen bg-[#F6F7F5] px-4 py-10 text-[#10233D]">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#1F6F54]">
            Cotizador inteligente
          </p>
          <h1 className="font-display text-4xl font-semibold md:text-5xl">
            Seguros para tu auto
          </h1>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-[#DADFE3] bg-white p-6 shadow-sm">
            <FormularioCotizacion onSubmit={fetchCotizaciones} loading={loading} error={error} />
          </div>
          
          <ResultadosCotizacion quotes={quotes} />
        </div>
      </div>
    </div>
  );
}