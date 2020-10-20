import React from 'react';
import { connect } from 'react-redux';
import instance, { key } from '../../api';
import { setCryptos } from '../../ducks/trackerBlock';
import { CryptoBlock, CryptoCoin } from '../../types';
import CoinRow from './CoinRow';
import './TrackerBlock.scss';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';

const TrackerBlock: React.FC<RootState> = ({
  trackerBlock,
  setCryptos,
  favoriteCoins,
}: any) => {
  const [currentCurrency, setCurrentCurrency] = React.useState<string>('USD');
  const fetchtCryptos = () => {
    instance
      .get(
        `currencies/ticker?key=${key}&ids=BTC,ETH,XRP,LTC,EOS,BCH&interval=1d&convert=${currentCurrency}`
      )
      .then((response) => {
        const currencies: CryptoBlock = response.data.map(
          (currency: any): CryptoCoin => {
            return {
              name: currency.name,
              photoURL: currency.logo_url,
              price: +parseFloat(currency.price).toFixed(2),
              rank: parseInt(currency.rank),
              favorite: favoriteCoins.has(currency.name) ? true : false,
            };
          }
        );
        setCryptos(currencies);
      });
  };
  React.useEffect(() => {
    fetchtCryptos();
    const interval = setInterval(fetchtCryptos, 1000 * 60 * 2);
    return () => clearInterval(interval);
  }, [currentCurrency]);
  const selectCurrencyType = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentCurrency(evt.target.value);
  };

  return (
    <section className='crypto-tracking'>
      <div className='container'>
        <div className='crypto-tracking__wrapper'>
          <div className='crypto-tracking__head-wrapper'>
            <h2 className='crypto-tracking__title head-title'>
              Cryptocurrency rate
            </h2>
            <Link className='navigate-btn' to='/convert'>
              Converter
            </Link>
          </div>

          <div className='crypto-tracking__header crypto-tracking__row'>
            <div className='crypto-tracking__column'>Currency</div>
            <div className='crypto-tracking__column crypto-tracking__column--price-head'>
              <span>Price</span>
              <select onChange={selectCurrencyType}>
                <option>USD</option>
                <option>EUR</option>
                <option>RUB</option>
              </select>
            </div>
            <div className='crypto-tracking__column'>Rank</div>
            <div className='crypto-tracking__column'>Favorite</div>
          </div>
          {trackerBlock.map((coin: CryptoCoin) => {
            return <CoinRow {...coin} key={coin.rank} />;
          })}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ trackerBlock, favoriteCoins }: RootState) => {
  return {
    trackerBlock,
    favoriteCoins,
  };
};

export default connect(mapStateToProps, { setCryptos })(TrackerBlock);
