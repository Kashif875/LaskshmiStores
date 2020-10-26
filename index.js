import React from "react";
import {AppRegistry, Text, StatusBar} from 'react-native';
import 'react-native-gesture-handler'
import "./src/utils/modal";
import "./src/utils/toast";

import {name as appName} from './app.json';
import App from './src/app';

// Disable the font scaling
if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;
Text.allowFontScaling = false;


AppRegistry.registerComponent(appName, () => App);
