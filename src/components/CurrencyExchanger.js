import React, { useEffect, useState } from 'react';
import getCurrencies from '../services/API/getCurrencies';
import conversion from '../services/API/conversion';

const CurrencyExchanger = () => {
    const [curr, setCurr] = useState([]);
    const [amount, setAmount] = useState();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    useEffect(() => {
        getCurrencies().then((res) => setCurr(Object.keys(res.rates)));
    }, []);

    const handleConversion = () => {
        conversion(amount, from, to);
    };

    console.log(from);

    return (
        <div className="currencyExchangerContainer">
            <h2>Currency Exchanger</h2>
            <div className="currencyExchanger">
                <div className="currencyInputs">
                    <label className="amount">
                        Amount
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </label>
                    <div className="currencies">
                        <label className="from">
                            From
                            <select onChange={(e) => setFrom(e.target.value)}>
                                {curr.map((rate) => (
                                    <option key={rate}>{rate}</option>
                                ))}
                            </select>
                        </label>
                        <label className="to">
                            To
                            <select onChange={(e) => setTo(e.target.value)}>
                                {curr.map((rate) => (
                                    <option key={rate}>{rate}</option>
                                ))}
                            </select>
                        </label>
                        <button onClick={handleConversion}>Convert</button>
                    </div>
                </div>
                <div className="exchangeResult">
                    <p>Res1</p>
                    <p>Res2</p>
                    <button>Details</button>
                </div>
            </div>
        </div>
    );
};

export default CurrencyExchanger;
