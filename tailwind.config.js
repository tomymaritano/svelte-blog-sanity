import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}', // Asegura que escanee todos tus archivos fuente
  ],
  theme: {
    extend: {
      // Extendé aquí si necesitás más utilidades personalizadas
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Habilita las clases `prose`
    skeleton() // Activa los estilos de Skeleton UI
  ],
};
