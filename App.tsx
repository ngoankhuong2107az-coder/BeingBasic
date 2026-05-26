import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense, useCallback, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CartProvider } from '@/context/CartContext';
import { UIProvider } from '@/context/UIContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { PageTransition } from '@/components/layout/PageTransition';
import { HomePage } from '@/pages/HomePage';

const CartSidebar = lazy(() =>
  import('@/components/cart/CartSidebar').then((m) => ({ default: m.CartSidebar })),
);
const ProductModal = lazy(() =>
  import('@/components/products/ProductModal').then((m) => ({ default: m.ProductModal })),
);
const AuthModal = lazy(() =>
  import('@/components/auth/AuthModal').then((m) => ({ default: m.AuthModal })),
);
const UserDashboard = lazy(() =>
  import('@/components/dashboard/UserDashboard').then((m) => ({
    default: m.UserDashboard,
  })),
);
const Chatbot = lazy(() =>
  import('@/components/chat/Chatbot').then((m) => ({ default: m.Chatbot })),
);

export default function App() {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <CartProvider>
      <UIProvider>
        <Helmet>
          <title>BeingBasic — Luxury Minimal Essentials</title>
          <meta
            name="description"
            content="BeingBasic — Ultra-modern luxury minimalist essentials. Premium black & white design, crafted for calm elegance."
          />
          <meta name="keywords" content="luxury, minimalist, ecommerce, essentials, monochrome" />
          <link rel="canonical" href="https://beingbasic.com" />
        </Helmet>

        <AnimatePresence mode="wait">
          {loading && <LoadingScreen key="loader" onComplete={handleLoadComplete} />}
        </AnimatePresence>

        {!loading && (
          <PageTransition>
            <div className="noise-overlay fixed inset-0 pointer-events-none z-[1] opacity-20" />
            <Navbar />
            <HomePage />
            <Footer />
            <Suspense fallback={null}>
              <CartSidebar />
              <ProductModal />
              <AuthModal />
              <UserDashboard />
              <Chatbot />
            </Suspense>
          </PageTransition>
        )}
      </UIProvider>
    </CartProvider>
  );
}
