import type { AboutPageProps } from '@shopit/template-sdk';

export function AboutPage({ locale, subdomain }: AboutPageProps) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>About Us</h1>
      <p>Welcome to {subdomain}</p>
    </div>
  );
}