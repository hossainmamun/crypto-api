import React from 'react';

const CoinContainer = ({ coins, search }) => {
    const filterCoins = coins.filter(coin => coin.name.toLowerCase().includes(search))

    return (
        <div className='table-responsive'>
            <table className='table'>
                <thead>
                    <tr className='text-warning text-center text-capitalize'>
                        <th>index</th>
                        <th>coin</th>
                        <th>current_price</th>
                        <th>price_change_24h</th>
                        <th>price_change_%_24h</th>
                        <th>total_volume</th>
                        <th>mkt_cap</th>
                        <th>mkt_cap_change_24h</th>
                        <th>mkt_cap_change_%_24h</th>
                    </tr>
                </thead>
                {
                    search ?
                        <tbody>
                            {
                                filterCoins.map((coin, index) =>
                                    <tr className='text-white text-center text-capitalize'>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img src={coin.image} className="img-fluid me-3" alt="" style={{ width: '30px', height: '30px' }} /> {coin.name} <span className='text-secondary text-lowercase ms-3'>{coin.symbol}</span>
                                        </td>
                                        <td>$ {coin.current_price.toFixed(2)}</td>
                                        <td>$ {coin.price_change_24h.toFixed(2)}</td>
                                        {
                                            coin.price_change_percentage_24h < 0 ?
                                                <td className='text-danger'>$ {coin.price_change_percentage_24h.toFixed(2)} %</td> :
                                                <td className='text-success'>$ {coin.price_change_percentage_24h.toFixed(2)} %</td>
                                        }
                                        <td>$ {coin.total_volume}</td>
                                        <td>$ {coin.market_cap}</td>
                                        <td>$ {coin.market_cap_change_24h.toFixed(2)}</td>
                                        <td>$ {coin.market_cap_change_percentage_24h.toFixed(2)} %</td>
                                    </tr>
                                )
                            }
                        </tbody> :
                        <tbody>
                            {
                                coins.map((coin, index) =>
                                    <tr className='text-white text-center text-capitalize'>
                                        <td>{index + 1}</td>
                                        <td><img src={coin.image} className="img-fluid me-3" alt="" style={{ width: '30px', height: '30px' }} /> {coin.name} <span className='text-secondary text-lowercase ms-3'>{coin.symbol}</span></td>
                                        <td>$ {coin.current_price.toFixed(2)}</td>
                                        <td>$ {coin.price_change_24h.toFixed(2)}</td>
                                        {
                                            coin.price_change_percentage_24h < 0 ?
                                                <td className='text-danger'>$ {coin.price_change_percentage_24h.toFixed(2)} %</td> :
                                                <td className='text-success'>$ {coin.price_change_percentage_24h.toFixed(2)} %</td>
                                        }
                                        <td>$ {coin.total_volume}</td>
                                        <td>$ {coin.market_cap}</td>
                                        <td>$ {coin.market_cap_change_24h.toFixed(2)}</td>
                                        {
                                            coin.market_cap_change_percentage_24h < 0 ?
                                            <td className='text-danger'>$ {coin.market_cap_change_percentage_24h.toFixed(2)} %</td> :
                                            <td className='text-success'>$ {coin.market_cap_change_percentage_24h.toFixed(2)} %</td>
                                        }
                                    </tr>
                                )
                            }
                        </tbody>
                }
            </table>
        </div>
    );
};

export default CoinContainer;