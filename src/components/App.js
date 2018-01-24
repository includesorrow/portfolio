import React, { Component } from 'react';

import Header from './Header/Header';
import ProjectPage from './ProjectPage/ProjectPage';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="mt-5">
          <Header />
        </div>
        <div className="my-5">
          <ProjectPage />
        </div>
        <div className="mb-5">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
