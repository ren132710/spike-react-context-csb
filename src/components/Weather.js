import React from 'react';
import { usePrefs } from '../context/PrefsContext';
import { useUtils } from '../context/UtilsContext';

function Weather() {
  const { lang, units } = usePrefs();
  const { getTranslation, getUnitOfMeasure } = useUtils();

  return (
    <div className="current-weather-container">
      <div>
        <span className="label">{getTranslation(2, lang)}</span>
        <span className="value">
          10°
          <span className="value">
            {getUnitOfMeasure(units, 'temp')}
          </span>
        </span>
      </div>
      <div>
        <span className="label">{getTranslation(3, lang)}</span>
        <span className="value">30%</span>
      </div>
      <div>
        <span className="label">{getTranslation(4, lang)}</span>
        <span className="value">
          10{' '}
          <span className="value">
            {getUnitOfMeasure(units, 'velocity')}
          </span>
        </span>
      </div>
      <div>
        <span className="label">{getTranslation(5, lang)}</span>
        <span className="value">
          10{' '}
          <span className="value">
            {getUnitOfMeasure(units, 'distance')}
          </span>
        </span>
      </div>
    </div>
  );
}

export default Weather;
