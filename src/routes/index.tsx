import type { Component } from 'solid-js';

import { Routes, Route } from 'solid-start';
import Step from './step';
import Home from '~/pages/Home';

const App: Component = () => {
  return (
    <>
    <Routes>
      <Route path="/" component={Home}></Route>
      <Route path="/step" component={Step}></Route>
    </Routes>
    </>
  );
};

export default App;
