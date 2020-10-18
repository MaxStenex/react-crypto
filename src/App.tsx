import React from 'react';
import './App.scss';
import TrackerBlock from './components/TrackerBlock/TrackerBlock';
import './normalize.scss';

const App: React.FC = () => {
  return (
    <div className='bg-wrapper'>
      <div className='app-wrapper'>
        <main>
          <TrackerBlock />
        </main>
      </div>
    </div>
  );
};

export default App;
