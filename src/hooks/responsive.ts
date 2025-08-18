import { useEffect, useState } from 'react';

type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'largeDesktop';

const getBreakpoint = (width: number): Breakpoint => {           
  if (width < 1024) return 'tablet';           
  if (width < 1280) return 'desktop';          
  return 'largeDesktop';                      
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
    isTablet: breakpoint === 'tablet',
    isDesktop: breakpoint === 'desktop' || breakpoint === 'largeDesktop',
  };
};
