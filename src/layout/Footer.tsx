import type { FooterProps } from '@shopit/template-sdk';

export function Footer({ store, locale }: FooterProps) {
  return (
    <footer style={{ padding: '2rem', borderTop: '1px solid #e2e8f0', marginTop: 'auto', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} {store.name}</p>
    </footer>
  );
}