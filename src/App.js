import React, { Component } from 'react';
import './App.css';
import SocialMedia from './components/SocialMedia/SocialMedia';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <main>
          <NavBar/>
          <div className="intro">Hello, I'm Jimmy!</div>
          <div class="tagline">All-Star Dev | Code Fanatic | Linux Hacker | Bleh</div>
          <SocialMedia/>
        </main>
      </div>
    );
  }
}

export default App;
