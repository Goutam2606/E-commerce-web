import { useState, useEffect } from 'react';

export const useElectron = () => {
  const [isElectron, setIsElectron] = useState(false);
  const [appVersion, setAppVersion] = useState('');

  useEffect(() => {
    // Check if running in Electron
    setIsElectron(!!window.electronAPI);
    
    if (window.electronAPI) {
      // Get app version
      window.electronAPI.getAppVersion().then(setAppVersion);
    }
  }, []);

  const minimizeWindow = () => {
    if (window.electronAPI) {
      window.electronAPI.minimizeWindow();
    }
  };

  const closeWindow = () => {
    if (window.electronAPI) {
      window.electronAPI.closeWindow();
    }
  };

  return {
    isElectron,
    appVersion,
    platform: window.electronAPI?.platform,
    minimizeWindow,
    closeWindow
  };
};