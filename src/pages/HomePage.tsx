import type { HomePageProps } from '@shopit/template-sdk';
import { PriceDisplay } from '@shopit/template-sdk';

export function HomePage({ store, products, locale }: HomePageProps) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>{store.name}</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        {products.map((product) => (
          <div key={product._id} style={{ border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem' }}>
            {product.images[0] && <img src={product.images[0]} alt={product.name} style={{ width: '100%', borderRadius: '0.25rem' }} />}
            <h3 style={{ marginTop: '0.5rem' }}>{product.name}</h3>
            <PriceDisplay price={product.price} salePrice={product.salePrice} isOnSale={product.isOnSale} locale={locale} />
          </div>
        ))}
      </div>
    </div>
  );
}