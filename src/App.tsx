import React from 'react';
import './App.scss';
import './normalize.scss';

const App: React.FC = () => {
  return (
    <div className='bg-wrapper'>
      <div className='app-wrapper'>
        <main>
          <section className='crypto-tracking'>
            <div className='container'>
              <div className='crypto-tracking__wrapper'>
                <h2 className='crypto-tracking__title'>Cryptocurrency rate</h2>
                <div className='crypto-tracking__header crypto-tracking__row'>
                  <div className='crypto-tracking__column crypto-tracking__currency-header'>
                    Currency
                  </div>
                  <div className='crypto-tracking__column crypto-tracking__value-header'>
                    Value
                  </div>
                  <div className='crypto-tracking__column crypto-tracking__rank-header'>
                    Rank
                  </div>
                  <div className='crypto-tracking__column crypto-tracking__favorite-header'>
                    Favorite
                  </div>
                </div>
                <div className='crypto-tracking__row crypto-tracking__currency-main'>
                  <div className='crypto-tracking__column crypto-tracking__currency-name'>
                    <img
                      src='https://ru.bitcoinwiki.org/upload/ru/images/5/55/Bitcoin_logo.jpg'
                      alt=''
                    />
                    <span>Bitcoin</span>
                  </div>
                  <div className='crypto-tracking__column crypto-tracking__currency-price'>
                    <span>100000$</span>
                  </div>
                  <div className='crypto-tracking__column crypto-tracking__currency-rank'>
                    <span>1</span>
                  </div>
                  <div className='crypto-tracking__column crypto-tracking__currency-favorite'>
                    <span>yep</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
