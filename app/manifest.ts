import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ATS_PDZ Dossier',
    short_name: 'ATS_PDZ',
    description: 'ATS Developer Dossier',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#09090b',
    icons: [
      {
        src: '/favLogo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favLogo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
