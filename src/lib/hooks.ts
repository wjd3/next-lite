import {
  useState,
  useEffect,
  useLayoutEffect as useInitialEffect
} from 'react';
import { useTheme as useOriginalTheme } from 'next-themes';
import { Theme } from 'src/lib/types';

const useLayoutEffect =
  typeof window !== 'undefined' ? useInitialEffect : useEffect;

export const useTheme = () => {
  const { theme: originalTheme, setTheme: setOriginalTheme } =
    useOriginalTheme();
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');

  useLayoutEffect(() => {
    if (originalTheme) {
      setCurrentTheme(originalTheme as Theme);
    }
  }, [originalTheme]);

  return { theme: currentTheme, setTheme: setOriginalTheme };
};
