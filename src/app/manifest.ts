import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Morusu Life Sciences',
    short_name: 'Morusu',
    description: 'Ayurvedic Care. Naturally Modern.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F9F9F6',
    theme_color: '#133621',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
