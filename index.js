/**
 * @format
 */
 import * as React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import { Provider as PaperProvider } from 'react-native-paper';
import {name as appName} from './app.json';
import { Provider } from "react-redux";
import store from "./store/index.js";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Remote debugger']);
//LogBox.ignoreLogs(['Warning: ...']);

export default function Main() {
    return (
      <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
      </Provider>
    );
  }
AppRegistry.registerComponent(appName, () => Main);
