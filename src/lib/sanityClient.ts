import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'msj83uox', // <-- tu ID REAL
  dataset: 'production',  // <-- tu dataset REAL
  apiVersion: '2025-05-26',
  useCdn: true,
});