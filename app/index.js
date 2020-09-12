import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouteContainer from './containers/RouteContainer';
import store from './store';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render() {
        return (
            <RouteContainer />
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))