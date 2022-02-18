import React, { useEffect, useState } from 'react';
import '../../StyleSheet/Main.scss'
import CoinContainer from './CoinContainer.js';

const Home = () => {
    const [search, setSearch] = useState();
    const [coins, setCoins] = useState([]);


    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => {
                setCoins(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        fetch('https://www.coingecko.com/en/overall_stats')
            .then(res => res.json())
            .then(data => {
                console.log(data.Coins)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <main>
            <section className='header my-5'>
                <div className='row justify-content-center'>
                    <div className='text-center'>
                        <h4>$$ crypto world $$</h4>
                        <p>Search Currency By Name</p>
                    </div>
                    <div className="col-md-4 col-sm-8 col-xm-10">
                        <div className="input-group">
                            <input type="text" onChange={(e) => setSearch(e.target.value)} class="form-control py-2 text-white bg-transparent" placeholder="Search currency by Name" />
                        </div>
                    </div>
                </div>
            </section>

            {/* coin container */}
            <section className='coin-container'>
                <CoinContainer coins={coins} search={search} key={coins.id} />
            </section>

            {/* footer */}
            <footer className='text-center'>
                <strong>copy&copy;right <span className='text-warning'>{new Date().getFullYear()} </span>HMamun all right reserved</strong>
            </footer>
        </main>
    );
};

export default Home;