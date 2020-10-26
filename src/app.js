import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import Store from './redux/store';
import {Provider} from 'react-redux';
import AppNavigatorWrap from './navigation/AppNavigator';
import { LogBox } from 'react-native';

const {store, persistor} = Store();

LogBox.ignoreAllLogs()

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppNavigatorWrap/>
            </PersistGate>
        </Provider>
    );
};

export default App;
