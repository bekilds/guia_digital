import { registerRootComponent } from 'expo';
import App from './App';

// registerRootComponent chama o AppRegistry.registerComponent('main', () => App);
// Ele garante que o ambiente seja configurado corretamente, seja no Expo Go ou nativo.
registerRootComponent(App);
