export interface PlanCotizado {
  codigoPlan: string;
  nombre: string;
  precio: number;
  vigencia: string;
}

export interface Cotizacion {
  aseguradora: string;
  numeroCotizacion: string;
  fechaCotizacion: string;
  planes: PlanCotizado[];
}