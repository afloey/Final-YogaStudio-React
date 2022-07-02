import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, About, Classes, SignIn } from './components'
import './style.css'
import { firebaseConfig } from './firebaseConfig'
import 'firebase/auth'
import { Provider } from 'react-redux'
import { store } from './redux/store'

let myTitle = 'Ritual Yoga Studio'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home title={myTitle}/>
          </Route>
          <Route exact path='/classes'>
            <Classes></Classes>
          </Route>
          <Route exact path='/about'>
            <About title={''} main_text={undefined}></About>
          </Route>
          <Route exact path='/signin'>
            <SignIn></SignIn>
          </Route>
        </Switch>
      </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);