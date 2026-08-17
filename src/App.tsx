import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { useEffect, Suspense, lazy } from 'react';

import { Layout } from '@/components/layout/Layout';
import { PageTransition } from '@/components/ui/PageTransition';

// Lazy load routes for faster initial load
const Home = lazy(() => import('@/pages/Home'));
const Credentials = lazy(() => import('@/pages/Credentials'));
const Service = lazy(() => import('@/pages/Service'));
const Projects = lazy(() => import('@/pages/Projects'));
const WorkDetail = lazy(() => import('@/pages/WorkDetail'));
const Contact = lazy(() => import('@/pages/Contact'));

const queryClient = new QueryClient();

// Minimal loading fallback for lazy loaded routes
function RouteFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  );
}

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Layout>
      <Suspense fallback={<RouteFallback />}>
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
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
