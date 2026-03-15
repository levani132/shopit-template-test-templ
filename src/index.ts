import { defineTemplate } from '@shopit/template-sdk';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { LayoutWrapper } from './layout/Wrapper';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

export default defineTemplate({
  id: 'test-templ',
  name: 'სატესტო თემფლეითი',
  description: 'სატესტო თემფლეითი',
  version: '1.0.0',
  pages: {
    home: HomePage,
    products: ProductsPage,
    productDetail: ProductDetailPage,
    about: AboutPage,
  },
  layout: {
    wrapper: LayoutWrapper,
    header: Header,
    footer: Footer,
  },
  attributes: [],
  defaultAttributeValues: {},
});