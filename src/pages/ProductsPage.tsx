import type { ProductsPageProps } from '@shopit/template-sdk';

export function ProductsPage({ locale, subdomain }: ProductsPageProps) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Products</h1>
      <p>Browse all products from {subdomain}</p>
    </div>
  );
}