export type CotizacionPlan = {
  codigoPlan: string;
  nombre: string;
  precio: number;
  vigencia: string;
};

export type Cotizacion = {
  aseguradora: string;
  numeroCotizacion: string;
  fechaCotizacion: string;
  planes: CotizacionPlan[];
};
