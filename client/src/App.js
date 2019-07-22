import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import HomePage from './components/HomePage';
import BlogPost1 from './components/BlogPost1';
import BlogPost2 from './components/BlogPost2';
import BlogPost3 from './components/BlogPost3';
import NotFound from './components/NotFound';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/blog/1" component={BlogPost1} />
                    <Route exact path="/blog/2" component={BlogPost2} />
                    <Route exact path="/blog/3" component={BlogPost3} />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/*" component={NotFound} />
                </Switch>
            </Router>
        );
    }
}
