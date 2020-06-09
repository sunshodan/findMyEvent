import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './redux/store';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/layout/Navbar';
import EventDetail from './Components/layout/EventDetail';
import Landing from './Components/layout/Landing';
import AddEvent from './Components/layout/AddEvent';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/layout/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/addEvent" component={AddEvent} />
            <Route exact path="/events/:id" component={EventDetail} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
