import HelloWorld from './hello-world';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class Greeting {
    hello() {
        ReactDOM.render(
            <HelloWorld />,
            document.getElementById('content')
        );
    }
};
