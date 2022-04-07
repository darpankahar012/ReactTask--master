import React, { Component, lazy, Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './App.css';
import { suspenseFallbackLoader } from './components/Loader'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Login from './components/pages/Login/login';

// const Dashboard = lazy(() => import("./components/dashBoard"));
const Gallery = lazy(() => import("./components/pages/Gallery"));



toast.configure()

export class App extends Component {
  render() {
    let load = suspenseFallbackLoader()
    return (
      <div className="App">
        <Router>
          <Suspense fallback={load}>
            <Header />
            <Switch>
              <Route exact path="/" render={(props) => <Login {...props} />} />
              <Route exact path="/gallery" render={(props) => <Gallery {...props} />} />

            </Switch>

          </Suspense>
        </Router>
      </div>
    );
  }
}
export default App
