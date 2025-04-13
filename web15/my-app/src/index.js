import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import LifecycleDemo from './LifecycleDemo';
import Counter from './Counter';
import JokeFetcher from './JokeFetcher';
import RefExample from './RefExample';
import App from './App';
import Parent from './Parent';
import Parent1 from './Parent1';
import Formvalidate from './Formvalidate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Content />
    <Footer />
    <LifecycleDemo />
    <Counter />
    <JokeFetcher />
    <RefExample />
    <App />
    <Parent />
    <Parent1 />
    <Formvalidate />
  </React.StrictMode>
);
