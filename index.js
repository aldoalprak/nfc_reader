/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import App from 'react-native-nfc-manager/example/AndroidMifareClassic'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
