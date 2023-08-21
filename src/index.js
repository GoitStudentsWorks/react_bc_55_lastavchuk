import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'services/styles/theme';
import { persistor, store } from 'redux/store';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter basename="/react_bc_55_lastavchuk">
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </ThemeProvider>
    // </React.StrictMode>
);
