import React from 'react';
import './App.css';
import PersonCard from './Components/component_x';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" />
      <PersonCard firstName="John" lastName="Doe" age={ 18 } hairColor="Black" />
      <PersonCard firstName="John" lastName="W" age={ 28 } hairColor="Unkown" />
      <PersonCard firstName="John" lastName="Garcia" age={ 38 } hairColor="Mixed" />
    </div>
  );
}

export default App;
