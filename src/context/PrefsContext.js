import React, {
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';

/**
 * How to create a contet:
 *  1. Create the contexts
 *  2. Make the context available to the rest of the app via a custom hook
 *  3. Create the provider component
 *  4. Define the provider and delegate props to the contexts
 *  5. Use context anywhere in the tree
 */

// 1. create the contexts
// you can set a default value here, but it's not required - e..g, React.createContext('en')
const PrefsContext = React.createContext();

// 2. Make the context available to the rest of the app via a custom hook
export function usePrefs() {
  const context = useContext(PrefsContext);

  // throw error if context is called from component outside of provider
  if (context === undefined) {
    throw new Error(
      'usePrefs is being called outside of its Provider',
    );
  }

  return context;
}

// 3. create the provider component
// 4. Define the provider and delegate props to the contexts
export function PrefsProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [units, setUnits] = useState('imperial');
  // const [theme, setTheme] = useState('light');

  // fires every time there is a state change to prefs.theme
  // useEffect(() => {
  //   console.log('useEffect called');
  //   document.querySelector('body').setAttribute('data-theme', theme);
  // }, [theme]);

  // memoize otherwise consumers will be forced to re-render if the parent of the provider re-renders
  const contextValue = useMemo(() => {
    console.log('useMemo is called');
    return { lang, units, setLang, setUnits };

    //React memoizes the built-in set functions by default, so don't need to include as dependency
  }, [lang, units]);

  return (
    <PrefsContext.Provider value={contextValue}>
      {children}
    </PrefsContext.Provider>
  );
}

PrefsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
