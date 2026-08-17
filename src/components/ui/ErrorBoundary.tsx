import { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary - Catches React errors and displays a user-friendly fallback UI
 * instead of a blank screen. Shows production-ready thinking for recruiters.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }

    // In production, you could send this to an error tracking service
    // like Sentry, LogRocket, or a custom endpoint
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    });

    // Reload the page to reset the application state
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
              {/* Error Icon */}
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>

              {/* Error Message */}
              <h1 className="text-2xl font-display font-bold text-foreground mb-4">
                Something went wrong
              </h1>
              <p className="text-muted-foreground mb-8">
                An unexpected error occurred. Don't worry, your work is safe.
              </p>

              {/* Error Details (Dev Only) */}
              {import.meta.env.DEV && this.state.error && (
                <details className="mb-6 text-left">
                  <summary className="text-sm text-muted-foreground cursor-pointer hover:text-foreground mb-2">
                    Technical details
                  </summary>
                  <pre className="bg-muted p-4 rounded-lg overflow-auto text-xs text-muted-foreground">
                    {this.state.error.toString()}
                  </pre>
                </details>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={this.handleReset}
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-full transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reload Page
                </button>
                <a
                  href="/"
                  className="inline-flex items-center justify-center font-semibold px-6 py-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
                >
                  Go Home
                </a>
              </div>

              {/* Help Link */}
              <p className="text-sm text-muted-foreground mt-6">
                If this keeps happening, feel free to{' '}
                <a
                  href="https://github.com/aslaan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  report the issue
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
