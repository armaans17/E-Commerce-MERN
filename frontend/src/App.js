import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/footer';


const App = () => {
  return (
    <>
    <Header/>
    <main className='py-3'>
      
      <Container>
      <h1>Welcome to Shop Master</h1>
      </Container>

    </main>
    <Footer/>
    </>
  );
}

export default App;
