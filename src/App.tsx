import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { useEffect } from 'react';

import { Layout } from '@/components/layout/Layout';
import { PageTransition } from '@/components/ui/PageTransition';

import Home from '@/pages/Home';
import Credentials from '@/pages/Credentials';
import Service from '@/pages/Service';
import Projects from '@/pages/Projects';
import WorkDetail from '@/pages/WorkDetail';
import Contact from '@/pages/Contact';

const queryClient = new QueryClient();

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Layout>
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
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
