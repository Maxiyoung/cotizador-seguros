import type { Cotizacion } from '../../types/cotizacion';

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(value);

// Tipamos las props para que TypeScript no tire error
interface ResultadosProps {
  quotes: Cotizacion[];
}

export function ResultadosCotizacion({ quotes }: ResultadosProps) {
  return (
    <aside className="rounded-2xl border border-[#DADFE3] bg-white p-6 shadow-sm h-fit">
      <h2 className="mb-4 text-xl font-semibold text-[#10233D]">Resultados</h2>

      {quotes.length === 0 ? (
        <div className="rounded-xl border border-dashed border-[#DADFE3] bg-[#F6F7F5] p-5 text-sm text-[#4B5A6E]">
          Aún no hay cotizaciones. Complete el formulario y presione “Cotizar seguro”.
        </div>
      ) : (
        <div className="space-y-5">
          {quotes.map((quote) => (
            <article 
              key={`${quote.aseguradora}-${quote.numeroCotizacion}`} 
              className="rounded-xl border border-[#DADFE3] bg-[#F6F7F5] p-4"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#4B5A6E]">Aseguradora</p>
                  <h3 className="text-lg font-semibold text-[#10233D]">{quote.aseguradora}</h3>
                </div>
                <span className="rounded-full bg-[#DDF1E8] px-2.5 py-1 text-xs font-medium text-[#1F6F54]">
                  {quote.numeroCotizacion}
                </span>
              </div>

              <p className="mb-4 text-sm text-[#4B5A6E]">Emitida el {quote.fechaCotizacion}</p>

              <div className="space-y-3">
                {quote.planes.map((plan) => (
                  <div key={plan.codigoPlan} className="rounded-lg border border-[#DADFE3] bg-white p-3 shadow-sm">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-medium text-[#10233D]">{plan.nombre}</p>
                        <p className="text-xs uppercase tracking-[0.12em] text-[#4B5A6E]">{plan.vigencia}</p>
                      </div>
                      <span className="text-base font-semibold text-[#A6742A]">
                        {formatCurrency(plan.precio)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </aside>
  );
}