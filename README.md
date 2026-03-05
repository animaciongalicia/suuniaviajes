# Suunia – Agencia receptiva en Galicia

Web profesional para **Suunia**, agencia receptiva (DMC) en Galicia especializada en viajes, experiencias y logística para grupos privados y empresas.

## Stack tecnológico

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **next/image** para optimización de imágenes
- Preparado para despliegue en **Vercel**

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build de producción

```bash
npm run build
```

## Estructura de páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Home – presentación, experiencias, servicios |
| `/receptivo-galicia` | Página SEO principal – agencia receptiva DMC |
| `/viajes-grupos-galicia` | Viajes organizados para grupos |
| `/tours-privados-galicia` | Tours privados y experiencias |
| `/incentivos-empresa-galicia` | Incentivos y viajes corporativos |
| `/logistica-servicios-galicia` | Servicios logísticos |

## Imágenes

Las imágenes en `/public/images/` son placeholders. Reemplazar con fotografías reales:

- `hero-galicia.jpg` (1920x1080) – paisaje hero
- `experiencias-galicia.jpg` (1200x800)
- `gastronomia-galicia.jpg` (1200x800)
- `ruta-mar-galicia.jpg` (1200x800)

## Despliegue en Vercel

1. Sube el repositorio a GitHub
2. Conecta con Vercel
3. Framework: Next.js (detectado automáticamente)
4. Deploy
