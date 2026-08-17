import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { GoogleAnalytics, VercelAnalytics } from '@/components/ui/GoogleAnalytics';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { useEffect, Suspense, lazy, useRef } from 'react';

import { Layout } from '@/components/layout/Layout';
import { PageTransition } from '@/components/ui/PageTransition';
import {
  PageSkeleton,
  CredentialsSkeleton,
  ServiceSkeleton,
  CaseStudySkeleton,
  ContactSkeleton
} from '@/components/ui/PageSkeletons';
import { trackPageView } from '@/lib/analytics';

// Lazy load routes for faster initial load
const Home = lazy(() => import('@/pages/Home'));
const Credentials = lazy(() => import('@/pages/Credentials'));
const Service = lazy(() => import('@/pages/Service'));
const Projects = lazy(() => import('@/pages/Projects'));
const WorkDetail = lazy(() => import('@/pages/WorkDetail'));
const Contact = lazy(() => import('@/pages/Contact'));

const queryClient = new QueryClient();

function Router() {
  const [location] = useLocation();
  const prevLocationRef = useRef(location);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Track page view on route change
    if (prevLocationRef.current !== location) {
      trackPageView(location, prevLocationRef.current);
      prevLocationRef.current = location;
    }
  }, [location]);

  // Route-specific skeleton loader
  function RouteSkeleton() {
    if (location === '/') return <PageSkeleton />;
    if (location === '/credentials') return <CredentialsSkeleton />;
    if (location === '/service') return <ServiceSkeleton />;
    if (location === '/contact') return <ContactSkeleton />;
    if (location.startsWith('/projects/')) return <CaseStudySkeleton />;
    return <PageSkeleton />;
  }

  return (
    <Layout>
      <Suspense fallback={<RouteSkeleton />}>
        <PageTransition>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/credentials" component={Credentials} />
            <Route path="/service" component={Service} />
            <Route path="/projects" component={Projects} />
            <Route path="/projects/:slug" component={WorkDetail} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </PageTransition>
      </Suspense>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Router />
          </WouterRouter>
          <Toaster />
          {/* Analytics */}
          <GoogleAnalytics />
          <VercelAnalytics />
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
