import Home from '@/components/home';
import { ThemeProvider } from '@/components/themes-provider';
import { useThemeConfig } from 'nextra-theme-docs';

const Page = () => {
  const { darkMode } = useThemeConfig();
  return (
    <ThemeProvider defaultTheme={darkMode ? 'dark' : 'light'}>
      <Home />
    </ThemeProvider>
  );
};

export default Page;
