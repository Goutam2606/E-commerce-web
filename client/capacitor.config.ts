import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.technoworld.app',
  appName: 'Techno World',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    url: 'http://localhost:8000',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#dc2626',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#dc2626'
    }
  }
};

export default config;