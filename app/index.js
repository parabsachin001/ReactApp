import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LabelComponent from './components/LabelComponent';

class App extends React.Component {
    render() {
        return (
            <div>
                <LabelComponent label={"Hello world!"} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))