import React from 'react';
import { Link } from 'react-router-dom';
import instance, { key } from '../../api';
import './ConverterBlock.scss';

const ConverterBlock = () => {
  const [selectValue, setSelectValue] = React.useState(1);
  const [outputValue, setoutputValue] = React.useState(1);
  const [selectedCurrency, setSelectedCurrency] = React.useState('BTC');
  const [outputCurrency, setOutputCurrency] = React.useState('RUB');
  React.useEffect(() => {
    instance
      .get(
        `currencies/ticker?key=${key}&ids=${selectedCurrency}&interval=1d,30d&convert=${outputCurrency}`
      )
      .then((response) => {
        setoutputValue(+parseFloat(response.data[0].price).toFixed(2));
      });
  }, [selectedCurrency, outputCurrency]);

  return (
    <section className='converter'>
      <div className='container'>
        <div className='converter__top'>
          <h2 className='converter__title head-title'>
            Cryptocurrency converter
          </h2>
          <Link to='/' className='converter__navigate-btn navigate-btn'>
            Rating
          </Link>
        </div>
        <div className='converter__main'>
          <div className='converter__select-block'>
            <input
              type='number'
              value={selectValue}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                setSelectValue(+evt.target.value);
              }}
            />
            <select
              value={selectedCurrency}
              onChange={(evt: React.ChangeEvent<HTMLSelectElement>) => {
                setSelectedCurrency(evt.target.value);
              }}
            >
              <option>BTC</option>
              <option>ETH</option>
              <option>XRP</option>
              <option>LTC</option>
              <option>EOS</option>
              <option>BCH</option>
            </select>
          </div>
          <div className='converter__output-block'>
            <input
              type='number'
              value={outputValue * selectValue}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                setoutputValue(+evt.target.value);
              }}
              disabled
            />
            <select
              value={outputCurrency}
              onChange={(evt: React.ChangeEvent<HTMLSelectElement>) => {
                setOutputCurrency(evt.target.value);
              }}
            >
              <option>RUB</option>
              <option>BTC</option>
              <option>EUR</option>
              <option>USD</option>
              <option>ETH</option>
              <option>XRP</option>
              <option>LTC</option>
              <option>EOS</option>
              <option>BCH</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConverterBlock;
