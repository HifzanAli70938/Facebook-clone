import React,{useState} from 'react'
import './App.css';
import Menu from './components/Menu';
import Body from './components/Body';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <div className="app_menu">
      <Menu/>
      </div>
      <div className="app_body">
      <Body/>
      </div>

    </div>
  );
}

export default App;
