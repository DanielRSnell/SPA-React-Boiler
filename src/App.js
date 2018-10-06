import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import {simpleAction} from './actions/simpleAction.js'

// Containers
import Page from './components/containers/page'

class App extends Component {
    simpleAction = (event) => {
        this.props.simpleAction();
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload
                    </p>
                    <pre>
                 {
                     JSON.stringify(this.props)
                 }
                </pre>
                    <button onClick={this.simpleAction}>Test redux action</button>
                    <Route path={"/page"} component={Page}/>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);