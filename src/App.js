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

function App() {

  let [isVisible, serisVisible] = useState(true);
  return (
    <div>
      <h1>Hi, My Name is Neha Sapkal</h1>
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
    </div>
  );
}

export default App;
