import React from 'react';
import Header from './Components/Header/Header';
import TodoApp from "./Components/TodoApp/TodoApp";
import About from './Components/About/About';
import {BrowserRouter as Router, Route} from "react-router-dom";


export default () => {
    return (
        <Router>
            <Header />
                <Route path='/' component={TodoApp} />
                <Route path='/about' component={About} />
        </Router>
    );
};


