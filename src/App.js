import logo from './logo.svg';
import './App.css';
import MyFirstFun from './MyFirstFun';
import MyHtmlTag from './MyHtmlTag';
import ClassDemo from './ClassDemo';
import ClassState from './ClassState';
import ClassDemo1 from './ClassDemo1';
import ClassCounter from './ClassCounter';
import FunctionState from './FunctionState';
import FunctionalProbs from './FunctionalProbs';
import ConditionalRendering from './ConditionalRendering';
import MountStageExample from './MountStageExample';
import ShouldComponentUpdateDemo from './ShouldComponentUpdateDemo';
import ComponentDidUpdate from './ComponentDidUpdate';
import { useState } from 'react';
import UnmountDemo from './UnmountDemo';
import UseEffectDemo from './UseEffectDemo';
import UseEffectUnmount from './UseEffectUnmount';
import FormExample from './FormExample';
import FormExample1 from './FormExample1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';
import Formvalidation from './Formvalidation';
import ExternalCSS from './ExternalCSS';

function App() {

  let [isVisible, serisVisible] = useState(true);
  return (
    <div>
      {/* <h1>Hi, My Name is Neha Sapkal</h1>
      <h2>This is h2 tag</h2>
      <marquee>This is example of react js</marquee>
      <MyFirstFun></MyFirstFun>
      <MyHtmlTag></MyHtmlTag>
      <ClassDemo></ClassDemo>
      <ClassState></ClassState>
      <ClassDemo1></ClassDemo1>
      <ClassCounter name="Neha" age={20}></ClassCounter>
      <FunctionState></FunctionState>
      <FunctionalProbs course="Spring and React" duration="6 months"></FunctionalProbs>
      <ConditionalRendering></ConditionalRendering>
      <MountStageExample></MountStageExample>
      <ShouldComponentUpdateDemo></ShouldComponentUpdateDemo>
      <ComponentDidUpdate></ComponentDidUpdate>

      {
        isVisible ? <UseEffectDemo></UseEffectDemo> : null
      }

      <button onClick={() => { serisVisible(!isVisible) }}>update isVisible</button>
      <UseEffectDemo></UseEffectDemo>





      <UseEffectUnmount></UseEffectUnmount>
      {
        isVisible ? <UseEffectDemo></UseEffectDemo> : null
      }

      <button onClick={() => { serisVisible(!isVisible) }}>update isVisible</button>

      <FormExample></FormExample>
      <FormExample1></FormExample1> */}
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/service' element={<Service></Service>}></Route>
        </Routes>
        <Navbar></Navbar>
      </BrowserRouter>
      <Formvalidation></Formvalidation>

      <ExternalCSS></ExternalCSS>
    </div>
    
  );
}

export default App;
