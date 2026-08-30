import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ATS Developer Dossier | Aaron Thalakkottor Sooraj (ATS_PDZ)',
    short_name: 'ATS_PDZ',
    description: 'Futuristic Developer Dossier & ATS_PDZ Creative Tech Ecosystem by Aaron Thalakkottor Sooraj',
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
