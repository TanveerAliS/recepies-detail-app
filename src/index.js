import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { Provider } from 'react-redux';
import createStore from './store';

import Routes from './Routes';

library.add(fab, faGlobe, faChevronRight, faChevronLeft);

function App() {
    const store = createStore({}, process.env.NODE_ENV);
    return (
        <div className="App">
            <Provider store={store}>
                <Routes />
            </Provider>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
