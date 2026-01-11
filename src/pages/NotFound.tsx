import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center bg-card border border-border px-8 py-10 rounded-xl shadow-md space-y-3">
        <h1 className="text-5xl font-semibold text-foreground">404</h1>
        <p className="text-lg text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="inline-flex items-center justify-center text-primary font-medium hover:text-primary/80 underline underline-offset-4">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
