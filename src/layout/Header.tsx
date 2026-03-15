import type { HeaderProps } from '@shopit/template-sdk';

export function Header({ store }: HeaderProps) {
  return (
    <header style={{ padding: '1rem 2rem', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
      {store.logo && <img src={store.logo} alt={store.name} style={{ height: 40, width: 40, borderRadius: '50%' }} />}
      <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{store.name}</h1>
    </header>
  );
}