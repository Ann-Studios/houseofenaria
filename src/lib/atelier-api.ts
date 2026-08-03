export type AtelierProduct = {
  id: number;
  name: string;
  slug: string;
  short_description?: string | null;
  description?: string | null;
  category: string;
  price: number;
  sale_price?: number | null;
  stock: number;
  allow_preorder: boolean;
  manufacturing_days: number;
  status: string;
  main_image?: string | null;
  images?: Array<{ id: number; path: string; position: number }>;
};

type PublicProductsResponse = {
  success: boolean;
  data: {
    data: AtelierProduct[];
  };
};

const configuredApiUrl = import.meta.env.VITE_ATELIER_API_URL?.trim();
const productionApiUrl = 'https://houseofenaria-api.onrender.com/api/v1';

export const atelierApiUrl = (configuredApiUrl || productionApiUrl).replace(/\/$/, '');

export async function getAtelierProducts(): Promise<AtelierProduct[]> {
  if (!atelierApiUrl) return [];

  const response = await fetch(`${atelierApiUrl}/public/products?per_page=100`, {
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Atelier API returned ${response.status}`);
  }

  const payload = (await response.json()) as PublicProductsResponse;
  return payload.data?.data ?? [];
}

export function getAtelierImageUrl(path?: string | null): string {
  if (!path) return '/placeholder.svg';
  if (/^https?:\/\//i.test(path)) return path;

  const backendOrigin = atelierApiUrl.replace(/\/api\/v1\/?$/, '');
  return `${backendOrigin}/storage/${path.replace(/^\//, '')}`;
}

export function formatXof(value: number): string {
  return `${new Intl.NumberFormat('fr-FR').format(value)} XOF`;
}
