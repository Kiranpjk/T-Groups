'use client';

import { useEffect, useState } from 'react';
import { BrandLogo } from '@/components/ui/BrandLogo';

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  // First load only: holding every route change behind a splash makes the site feel slow.
  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 850);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div
      aria-live="polite"
      aria-label="Loading page"
      className={`page-loader ${isLoading ? 'page-loader--visible' : 'page-loader--hidden'}`}
      aria-hidden={!isLoading}
    >
      <div className="page-loader__content">
        <BrandLogo isDarkBg className="page-loader__logo" />
        <div className="page-loader__track" aria-hidden="true">
          <span className="page-loader__bar" />
        </div>
        <span className="page-loader__label">Preparing your export desk</span>
      </div>
    </div>
  );
}