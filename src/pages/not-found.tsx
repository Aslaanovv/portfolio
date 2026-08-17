import { Link } from 'wouter';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Premium 404 Page - Matches portfolio design language
 * Provides helpful navigation options when users hit a dead end
 */
export default function NotFound() {
  const quickLinks = [
    { label: 'Home', href: '/', icon: Home, description: 'Back to the main page' },
    { label: 'Projects', href: '/projects', icon: Search, description: 'Browse all work' },
    { label: 'Services', href: '/service', icon: ArrowLeft, description: 'What I offer' },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 md:px-8 py-12">

        <div className="max-w-3xl mx-auto text-center">

          {/* Large 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mb-8"
          >
            <h1 className="text-[12rem] md:text-[16rem] font-display font-bold text-primary/10 leading-none select-none">
              404
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <p className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                Page Not Found
              </p>
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12"
          >
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </motion.p>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-card/80 transition-all duration-300 min-w-[200px] justify-center"
                >
                  <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <span className="block font-semibold text-foreground">{link.label}</span>
                    <span className="text-xs text-muted-foreground">{link.description}</span>
                  </div>
                </Link>
              );
            })}
          </motion.div>

          {/* Helpful hints */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16 text-sm text-muted-foreground max-w-md mx-auto"
          >
            <p className="mb-2">If you believe this is an error, feel free to reach out.</p>
            <a
              href="https://github.com/aslaan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Report this issue →
            </a>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
