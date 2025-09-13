import { useVisitorCount } from '../hooks/useVisitorCount';

export const VisitorCounter = () => {
  const { count, loading } = useVisitorCount();

  if (loading) {
    return (
      <div className="text-sm text-muted-foreground">
        Loading visitor count...
      </div>
    );
  }

  return (
    <div className="text-sm text-muted-foreground">
      Visitors: {count.toLocaleString()}
    </div>
  );
};