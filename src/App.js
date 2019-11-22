import React, { Component } from 'react';
import logo from './logo.svg';
import Container from './components/container/index';
import Footer from './components/footer/index';
import Header from './components/header/index';
import Navbar from './components/navbar/index';
import './App.css';


class App extends Component {
  // state = {
  //   cards
  // }


  
  
  render() {
    return (
      <Container>
        <Navbar>
          <Header>
          </Header>
        </Navbar>
      </Container>

    )
  }


}

export default App;
