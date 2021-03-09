import React from 'react';
import './coins.css'

const Coins = ({ image, name, symbol, price, marketCap, volume, priceChange}) => {
    return (
        <div className="coin-container">
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='crypto' />
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>Rs.{price.toLocaleString()}</p>
                    <p className='coin-volume'>Rs.{volume}</p>
                    {priceChange < 0 ? (
                        <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                    )}
                    <p className='coin-market'>
                        Mkt Cap: Rs.{marketCap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coins
