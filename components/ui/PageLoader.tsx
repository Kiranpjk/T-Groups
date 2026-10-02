'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '@/components/ui/BrandLogo';

export function PageLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) {
      setIsLoading(true);
    }

    hasMounted.current = true;
    const timeout = window.setTimeout(() => setIsLoading(false), 850);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

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