import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const defaultConfig = {
  theme: 'dark',
  lang: 'es',
};

export default function Settings() {
  const [config, setConfig] = useLocalStorage('config', JSON.stringify(defaultConfig));

  const handleClick = (event) => {
    event.preventDefault();
    setConfig(JSON.stringify({
      ...defaultConfig,
      theme: 'light',
    }));
  };

  return (
    <div>
      <h1>APP SETTINGS</h1>
      <p>
        Theme:
        { ` ${JSON.parse(config).theme}` }
      </p>
      <p>
        Lang:
        { ` ${JSON.parse(config).lang}` }
      </p>
      <button type="button" onClick={handleClick}>
        Save New Settings
      </button>
    </div>
  );
}
