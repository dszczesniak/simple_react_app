import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import App from './App';
import Form from './formComponent';

//reducers
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/form" component={Form}/>
                    <Route path="/" component={App}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));


// class App extends Component {
//     render() {
//         return (
//             <div>
                
//                 <FormComponent />
//             </div>
//         );
//     }
// }

// export default App;

// ReactDOM.render(<App/>, document.querySelector('#root'));