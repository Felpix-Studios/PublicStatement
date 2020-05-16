import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StatementForm from './components/StatementForm.js';
import AppNav from './components/AppNav.js';
import RenderStatement from './components/RenderStatement.js';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <AppNav/>
    <Container>
    <h1>Public Statement</h1>
    <small>A Twitter Clone</small>
    <StatementForm/>
    <RenderStatement/>
    </Container>
    </div>
    </Provider>
  );
}

export default App;
