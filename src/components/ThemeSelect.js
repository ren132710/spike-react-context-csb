import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeSelect() {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      onChange={(e) => {
        setTheme(e.target.value);
      }}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
}
