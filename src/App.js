import React, { Component } from 'react';
// import ReactDOM from 'react-dom/client';
// import Heroes from './Heroes';
import {Routes, Route,BrowserRouter,Switch} from "react-router-dom";
import { Provider } from "react-redux";
import {store,persistor} from './store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from "redux-persist/integration/react";
import {PublicroutesArray} from './routes'
import './App.css';
import Heroes from './Components/Heroes';
import Header  from './routes/Header';
import HeroDetatil from './Components/HeroDetatil'
 class App extends Component {

  render(){
  return (
    <>
      <Header/>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    <React.Suspense >
                    <Switch>
                  {/* <Routes> */}
                  {/* <Route exact path="/dashboard" component={ Heroes} />
                  <Route exact path="/" component={Heroes} />  
                   <Route exact path="/heroes" component={Heroes} /> 
                   <Route exact path='/heroes/detail/:id' component={HeroDetatil}/> */}
                          {PublicroutesArray.map(({ component, path ,title}, key) => {
                          return (
                              <Route
                              exact path={path}
                                  title={title}
                                  component={component}
                                  key={key}
                              />
                          );
                      })}
                  
                  {/* </Routes> */}
                  </Switch>
              </React.Suspense>
    </BrowserRouter>
    </PersistGate>
    </Provider>
    </>
  );
 }
}

export default App;
