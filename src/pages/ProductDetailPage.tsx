import type { ProductDetailPageProps } from '@shopit/template-sdk';

export function ProductDetailPage({ locale, subdomain, productId }: ProductDetailPageProps) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Product Detail</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}