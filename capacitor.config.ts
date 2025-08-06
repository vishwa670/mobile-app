import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.a69f2f3d9fb14bc18b9cabff5e42f835',
  appName: 'TaskFlow - Todo Manager',
  webDir: 'dist',
  server: {
    url: 'https://a69f2f3d-9fb1-4bc1-8b9c-abff5e42f835.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0f172a',
      showSpinner: false
    }
  }
};

export default config;