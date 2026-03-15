import type { LayoutWrapperProps } from '@shopit/template-sdk';

export function LayoutWrapper({ store, accentColors, locale, children }: LayoutWrapperProps) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', ...accentColors }}>
      {children}
    </div>
  );
}