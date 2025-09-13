import { useState, useEffect } from 'react';
import type { VisitorCount } from '../types';

export const useVisitorCount = () => {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        if (!apiUrl) {
          console.warn('API URL not configured');
          setLoading(false);
          return;
        }

        const response = await fetch(`${apiUrl}/visitor-count`);
        if (response.ok) {
          const data: VisitorCount = await response.json();
          setCount(data.count);
        }
      } catch (error) {
        console.error('Failed to fetch visitor count:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  return { count, loading };
};