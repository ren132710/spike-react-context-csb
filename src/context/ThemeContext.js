import React, {
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';

/**
 * Note:
 * Split theme from prefs context to experiment with "optimization",
 * as theme is only consumed by center div and theme select
 *
 * This is likely overkill.
 * Unless the context split eliminates a number of un-needed rerenders,
 * would likely keep all prefs in a single context,
 *
 * See DevTools React Profiler "Highlight updates when components render."
 */

const ThemeContext = React.createContext();

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      'useTheme is being called outside of its Provider',
    );
  }

  return context;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  // fires every time there is a state change to theme
  useEffect(() => {
    console.log('useEffect called');
    document.querySelector('body').setAttribute('data-theme', theme);
  }, [theme]);

  const contextValue = useMemo(() => {
    return { theme, setTheme };
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
