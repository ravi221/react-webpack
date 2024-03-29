import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Users from './containers/Users';
import Pizza from './containers/Pizza';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
    return import('./containers/Pizza.js');
})

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/" >Users</Link>
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users} />
                    <Route path="/pizza" component={Pizza} />
                </div>
            </div>
        )
    }
}

export default App;