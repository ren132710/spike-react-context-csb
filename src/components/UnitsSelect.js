import React from 'react';
import { usePrefs } from '../context/PrefsContext';

export default function UnitsSelect() {
  const { units, setUnits } = usePrefs();

  return (
    <select
      value={units}
      onChange={(e) => {
        setUnits(e.target.value);
      }}
    >
      <option value="imperial">Imperial</option>
      <option value="metric">Metric</option>
    </select>
  );
}
