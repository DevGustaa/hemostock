import { useEffect, useState } from 'react';

type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'largeDesktop';

const getBreakpoint = (width: number): Breakpoint => {
  if (width < 640) return 'mobile';            // < 640px
  if (width < 1024) return 'tablet';           // 640px – 1023px
  if (width < 1280) return 'desktop';          // 1024px – 1279px
  return 'largeDesktop';                       // >= 1280px
};

export const useResponsive = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    breakpoint,
    isMobile: breakpoint === 'mobile',
    isTablet: breakpoint === 'tablet',
    isDesktop: breakpoint === 'desktop' || breakpoint === 'largeDesktop',
  };
};
