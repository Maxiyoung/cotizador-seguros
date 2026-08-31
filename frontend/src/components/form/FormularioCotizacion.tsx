import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { datosAutoSchema, type DatosAutoFormData } from '../../schemas/datosAuto.schema';

interface FormularioProps {
  onSubmit: (data: DatosAutoFormData) => void;
  loading: boolean;
  error: string;
}

export function FormularioCotizacion({ onSubmit, loading, error }: FormularioProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DatosAutoFormData>({
    resolver: zodResolver(datosAutoSchema),
    // Los valores por defecto evitan errores en campos que no mostramos (ej: es 0km, género)
    defaultValues: {
      vehiculo: { esOkm: false, uso: 'particular' },
      tipoPersona: 'F',
      genero: 'M',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      
      {/* SECCIÓN 1: DATOS DEL TITULAR */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[#10233D]">Datos del titular</h2>
        <div className="grid gap-4 md:grid-cols-2">
          
          <label className="space-y-2 text-sm font-medium text-[#10233D]">
            DNI
            <input
              {...register('contacto.dni')}
              className="w-full rounded-xl border border-[#DADFE3] px-3 py-2.5 outline-none focus:border-[#1F6F54] focus:ring-2 focus:ring-[#1F6F54]/20"
              placeholder="Ej: 40123456"
            />
            {errors.contacto?.dni && <p className="text-xs text-red-600">{errors.contacto.dni.message}</p>}
          </label>

          <label className="space-y-2 text-sm font-medium text-[#10233D]">
            Nombre Completo
            <input
              {...register('contacto.nombre')}
              className="w-full rounded-xl border border-[#DADFE3] px-3 py-2.5 outline-none focus:border-[#1F6F54] focus:ring-2 focus:ring-[#1F6F54]/20"
              placeholder="Ej: Juan Pérez"
            />
            {errors.contacto?.nombre && <p className="text-xs text-red-600">{errors.contacto.nombre.message}</p>}
          </label>

          <label className="space-y-2 text-sm font-medium text-[#10233D]">
            Email
            <input
              type="email"
              {...register('contacto.email')}
              className="w-full rounded-xl border border-[#DADFE3] px-3 py-2.5 outline-none focus:border-[#1F6F54] focus:ring-2 focus:ring-[#1F6F54]/20"
              placeholder="ejemplo@correo.com"
            />
            {errors.contacto?.email && <p className="text-xs text-red-600">{errors.contacto.email.message}</p>}
          </label>

          <label className="space-y-2 text-sm font-medium text-[#10233D]">
            Teléfono
            <input
              {...register('contacto.telefono')}
              className="w-full rounded-xl border border-[#DADFE3] px-3 py-2.5 outline-none focus:border-[#1F6F54] focus:ring-2 focus:ring-[#1F6F54]/20"
              placeholder="Ej: 3512345678"
            />
            {errors.contacto?.telefono && <p className="text-xs text-red-600">{errors.contacto.telefono.message}</p>}
          </label>

        </div>
      </section>

      {/* SECCIÓN 2: DATOS DEL VEHÍCULO */}
      <section className="space-y-4 border-t border-[#DADFE3] pt-6">
        <h2 className="text-xl font-semibold text-[#10233D]">Datos del vehículo</h2>
        <div className="grid gap-4 md:grid-cols-2">
          
          <label className="space-y-2 text-sm font-medium text-[#10233D]">
            Marca
            <input
              {...register('vehiculo.marca')}
              className="w-full rounded-xl border border-[#DADFE3] px-3 py-2.5 outline-none focus:border-[#1F6F54] focus:ring-2 focus:ring-[#1F6F54]/20"
              placeholder="Ej: Toyota"
            />
            {errors.vehiculo?.marca && <p className="text-xs text-red-600">{errors.vehiculo.marca.message}</p>}
          </label>

          <label className="space-y-2 text-sm font-medium text-[#10233D]">
            Modelo
            <input
              {...register('vehiculo.modelo')}
              className="w-full rounded-xl border border-[#DADFE3] px-3 py-2.5 outline-none focus:border-[#1F6F54] focus:ring-2 focus:ring-[#1F6F54]/20"
              placeholder="Ej: Corolla"
            />
            {errors.vehiculo?.modelo && <p className="text-xs text-red-600">{errors.vehiculo.modelo.message}</p>}
          </label>

          <label className="space-y-2 text-sm font-medium text-[#10233D]">
            Año
            <input
              type="number"
              {...register('vehiculo.anio')}
              className="w-full rounded-xl border border-[#DADFE3] px-3 py-2.5 outline-none focus:border-[#1F6F54] focus:ring-2 focus:ring-[#1F6F54]/20"
              placeholder="Ej: 2024"
            />
            {errors.vehiculo?.anio && <p className="text-xs text-red-600">{errors.vehiculo.anio.message}</p>}
          </label>

          <label className="space-y-2 text-sm font-medium text-[#10233D]">
            Valor del Vehículo ($)
            <input
              type="number"
              {...register('vehiculo.valorVehiculo')}
              className="w-full rounded-xl border border-[#DADFE3] px-3 py-2.5 outline-none focus:border-[#1F6F54] focus:ring-2 focus:ring-[#1F6F54]/20"
              placeholder="Ej: 15000000"
            />
            {errors.vehiculo?.valorVehiculo && <p className="text-xs text-red-600">{errors.vehiculo.valorVehiculo.message}</p>}
          </label>

          <label className="space-y-2 text-sm font-medium text-[#10233D]">
            Provincia
            <select
              {...register('vehiculo.provincia')}
              className="w-full rounded-xl border border-[#DADFE3] bg-white px-3 py-2.5 outline-none focus:border-[#1F6F54] focus:ring-2 focus:ring-[#1F6F54]/20"
            >
              <option value="">Seleccioná...</option>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="CABA">Capital Federal (CABA)</option>
              <option value="Catamarca">Catamarca</option>
              <option value="Chaco">Chaco</option>
              <option value="Chubut">Chubut</option>
              <option value="Córdoba">Córdoba</option>
              <option value="Corrientes">Corrientes</option>
              <option value="Entre Ríos">Entre Ríos</option>
              <option value="Formosa">Formosa</option>
              <option value="Jujuy">Jujuy</option>
              <option value="La Pampa">La Pampa</option>
              <option value="La Rioja">La Rioja</option>
              <option value="Mendoza">Mendoza</option>
              <option value="Misiones">Misiones</option>
              <option value="Neuquén">Neuquén</option>
              <option value="Río Negro">Río Negro</option>
              <option value="Salta">Salta</option>
              <option value="San Juan">San Juan</option>
              <option value="San Luis">San Luis</option>
              <option value="Santa Cruz">Santa Cruz</option>
              <option value="Santa Fe">Santa Fe</option>
              <option value="Santiago del Estero">Santiago del Estero</option>
              <option value="Tierra del Fuego">Tierra del Fuego</option>
              <option value="Tucumán">Tucumán</option>
            </select>
            {errors.vehiculo?.provincia && <p className="text-xs text-red-600">{errors.vehiculo.provincia.message}</p>}
          </label>

          <label className="space-y-2 text-sm font-medium text-[#10233D]">
            Código Postal
            <input
              {...register('vehiculo.codigoPostal')}
              className="w-full rounded-xl border border-[#DADFE3] px-3 py-2.5 outline-none focus:border-[#1F6F54] focus:ring-2 focus:ring-[#1F6F54]/20"
              placeholder="Ej: 5000"
            />
            {errors.vehiculo?.codigoPostal && <p className="text-xs text-red-600">{errors.vehiculo.codigoPostal.message}</p>}
          </label>

        </div>
      </section>

      {/* BOTÓN Y ERRORES GENERALES */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto inline-flex items-center justify-center rounded-xl bg-[#1F6F54] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#195a46] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? 'Cotizando...' : 'Cotizar seguro'}
        </button>
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}
    </form>
  );
}