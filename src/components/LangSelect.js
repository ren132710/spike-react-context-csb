import React from 'react';
import { usePrefs } from '../context/PrefsContext';

export default function LangSelect() {
  const { lang, setLang } = usePrefs();

  return (
    <select
      value={lang}
      onChange={(e) => {
        setLang(e.target.value);
      }}
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="sv">Svenska</option>
    </select>
  );
}
