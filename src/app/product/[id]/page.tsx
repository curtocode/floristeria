// app/product/[id]/page.tsx
import { ProductDetailView } from '@/features/product-detail/ProductDetailView';

// 1. Definimos params como una Promesa en la interfaz
interface PageProps {
  params: Promise<{ id: string }>;
}

// 2. Convertimos la función en async
export default async function ProductPage({ params }: PageProps) {
  
  // 3. "Unwrap" (desenvolvemos) los params con await
  const { id } = await params;

  return <ProductDetailView productId={id} />;
}