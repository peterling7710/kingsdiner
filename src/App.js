import React from 'react';
import logo from './logo.svg';
import {backDrop} from './components/backdrop.js';
import {HomepageLayout} from './components/homepagelayout.js';
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom';
import {FixedNav} from './components/fixedNav.js';
import {ScrollToTop} from './components/scrollToTop.js';
import Home from './components/home.js';
import Menu from './components/menu.js';
import About from './components/about.js';
import Contact from './components/contact.js';

import './App.css';
import { Responsive } from 'semantic-ui-react';

class Counter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render () {
    return(
      <h1>
       {this.state.count}
       <button onClick={this.increment}>Increment</button>
      </h1>
    ); 
  }

  increment = () => {
    this.setState( oldState => ({
      count: oldState.count + 1
    }));
  }
}

class App extends React.Component{

  render () {
    return(
      <BrowserRouter>
        <Responsive>
          <ScrollToTop>
            <div className="App">
              <FixedNav/>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/menu' exact component={Menu} />
                <Route path='/contact' exact component={Contact} />
              </Switch>
              </div>
          </ScrollToTop>
        </Responsive>
      </BrowserRouter>
    );
  }
}

export default App;
