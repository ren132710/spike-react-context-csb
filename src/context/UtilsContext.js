import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import getUnitOfMeasure from '../utils/units';
import getTranslation from '../utils/translations';

const UtilsContext = React.createContext();

// make the context available to the rest of the app via a custom hook
export function useUtils() {
  const context = useContext(UtilsContext);

  // throw error if context is called from component outside of provider
  if (context === undefined) {
    throw new Error(
      'useUtils is being called outside of its Provider',
    );
  }

  return context;
}

export function UtilsProvider({ children }) {
  // memoize otherwise consumers will be forced to re-render if the parent of the provider re-renders
  const contextValue = useMemo(() => {
    console.log('UtilsProvider useMemo is called');
    return { getUnitOfMeasure, getTranslation };
  }, []);

  return (
    <UtilsContext.Provider value={contextValue}>
      {children}
    </UtilsContext.Provider>
  );
}

UtilsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
