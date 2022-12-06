import React from 'react';
import { usePrefs } from '../context/PrefsContext';
import { useUtils } from '../context/UtilsContext';

function SectionTitle() {
  const { lang } = usePrefs();
  const { getTranslation } = useUtils();

  return <h1 className="section-title">{getTranslation(1, lang)}</h1>;
}

export default SectionTitle;
