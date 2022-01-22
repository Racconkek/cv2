import React from 'react';
import styles from './App.module.css';
import About from "./components/About/About";
import Preview from "./components/Preview/Preview";
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
        <Preview/>
        <About/>
        <Technologies/>
        <Projects/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;