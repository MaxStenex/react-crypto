import React from 'react';
import { Route, Switch } from 'react-router';
import './App.scss';
import ConverterBlock from './components/ConverterBlock/ConverterBlock';
import TrackerBlock from './components/TrackerBlock/TrackerBlock';
import './normalize.scss';

const App: React.FC = () => {
  return (
    <div className='bg-wrapper'>
      <div className='app-wrapper'>
        <main>
          <Switch>
            <Route exact path='/' component={TrackerBlock} />
            <Route path='/convert' component={ConverterBlock} />
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default App;
