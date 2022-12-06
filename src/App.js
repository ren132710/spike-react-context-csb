import React from 'react';
import SectionTitle from './components/SectionTitle';
import Weather from './components/Weather';
import LangSelect from './components/LangSelect';
import UnitsSelect from './components/UnitsSelect';
import ThemeSelect from './components/ThemeSelect';
import { PrefsProvider } from './context/PrefsContext';
import { UtilsProvider } from './context/UtilsContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <PrefsProvider>
      <div className="container">
        <header>
          <UtilsProvider>
            <SectionTitle />
          </UtilsProvider>
        </header>
        <main>
          <ThemeProvider>
            <UtilsProvider>
              <Weather />
            </UtilsProvider>
          </ThemeProvider>
          <br />
          <LangSelect />
          <UnitsSelect />
          <ThemeProvider>
            <ThemeSelect />
          </ThemeProvider>
        </main>
      </div>
    </PrefsProvider>
  );
}

export default App;
